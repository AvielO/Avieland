import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateResources } from "../../slices/resourcesSlice";
import Timer from "../Timer/Timer";

const UserResources = () => {
  const { copper, silver, gold, diamond } = useSelector(
    (state) => state.resources,
  );
  const username = useSelector((state) => state.user.username);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchResources = async () => {
      const res = await fetch(
        `${process.env.SERVER_URL}/users/${username}/resources`,
      );
      if (!res.ok) {
        throw new Error("Could not fetch the resources");
      }
      const userResources = await res.json();
      dispatch(
        updateResources({
          copper: userResources.resources.copper,
          silver: userResources.resources.silver,
          gold: userResources.resources.gold,
          diamond: userResources.resources.diamond,
        }),
      );
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
      </div>
      <div>
        <Timer />
      </div>
    </div>
  );
};

export default UserResources;
