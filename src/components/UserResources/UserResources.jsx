import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateResources } from "../../slices/resourcesSlice";
import Timer from "../Timer/Timer";
import io from "socket.io-client";
import { fetchWrapper } from "../../utils/fetchWarpper";
import { toast } from "react-toastify";

const socket = io(`${process.env.SERVER_URL}`);

const UserResources = () => {
  const { copper, silver, gold, diamond, turns } = useSelector(
    (state) => state.resources,
  );
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.username);

  socket.once(
    "update resources",
    ({ copper, silver, gold, diamond, turns }) => {
      dispatch(
        updateResources({
          copper,
          silver,
          gold,
          diamond,
          turns,
        }),
      );
      toast.info("!עדכון המשאבים בוצע בהצלחה");
    },
  );

  useEffect(() => {
    if (username) {
      socket.emit("listen myself", { username });
    }
    return () => {
      socket.off("listen myself");
      socket.off("update resources");
    };
  }, [username]);

  useEffect(() => {
    const fetchResources = async () => {
      if (username) {
        const { resources, turns } = await fetchWrapper(
          `${process.env.SERVER_URL}/users/${username}/resources`,
        );

        dispatch(
          updateResources({
            copper: resources.copper,
            silver: resources.silver,
            gold: resources.gold,
            diamond: resources.diamond,
            turns,
          }),
        );
      }
    };

    fetchResources();
  }, [username, copper, silver, gold, diamond]);

  return (
    <div className="flex items-center justify-center text-center">
      <div className="my-6 flex w-full items-center gap-8 p-4">
        <div className="flex items-center gap-2">
          <img
            className="h-12 w-12"
            src="/resources-icons/copper-icon.png"
            alt="copper-resource-icon"
          />
          <span className="text-2xl">{copper}</span>
        </div>
        <div className="flex items-center gap-2">
          <img
            className="h-12 w-12"
            src="/resources-icons/silver-icon.png"
            alt="silver-resource-icon"
          />
          <span className="text-2xl">{silver}</span>
        </div>
        <div className="flex items-center gap-2">
          <img
            className="h-12 w-12"
            src="/resources-icons/gold-icon.png"
            alt="gold-resource-icon"
          />
          <span className="text-2xl">{gold}</span>
        </div>
        <div className="flex items-center gap-2">
          <img
            className="h-11 w-12"
            src="/resources-icons/diamond-icon.png"
            alt="diamond-resource-icon"
          />
          <span className="text-2xl">{diamond}</span>
        </div>
        <div className="flex items-center gap-2">
          <img
            className="h-12 w-12"
            src="/resources-icons/turns-icon.png"
            alt="diamond-resource-icon"
          />
          <span className="text-2xl">{turns}</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Timer />
      </div>
    </div>
  );
};

export default UserResources;
