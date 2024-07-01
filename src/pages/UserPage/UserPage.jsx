import { useLoaderData, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getUserInformation } from "../../services/backendAPI.js";

import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { MdOutlineGroups } from "react-icons/md";
import { VscTypeHierarchy } from "react-icons/vsc";

import { updateResources } from "../../slices/resourcesSlice";

export const typeToImgPath = {
  attacker: "/player-type-icons/attacker-icon.png",
  defender: "/player-type-icons/defender-icon.png",
  attdefer: "/player-type-icons/attdefer-icon.png",
};

//Maybe add created day account
const UserPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userDetails = useLoaderData();
  const username = useSelector((state) => state.user.username);

  const handleAttack = async () => {
    //fetch post/patch of attack - username, destUsername
    const res = await fetch(
      `${process.env.SERVER_URL}/users/${username}/attack/${userDetails.username}`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
      },
    );
    const { reportID, updatedResources } = await res.json();

    dispatch(updateResources(updatedResources));
    navigate(`/reports/${reportID}`);
    //Future plan - Decrease Turns of something to avoid spamming
  };

  return (
    <div className="mx-12 grid grid-cols-2 gap-12">
      <div className="flex flex-col gap-6 rounded-xl bg-sky-300 py-4">
        <h1 className="text-center text-5xl">מידע על המשתמש</h1>
        <div className="flex items-center justify-evenly gap-6">
          <img className="h-64 w-64" src="/user-icon.png" alt="user-picture" />
          <div className="flex flex-col gap-8 text-4xl">
            <div className="flex items-center justify-center gap-2">
              <MdOutlineDriveFileRenameOutline />
              <span className="">{userDetails.username}</span>
            </div>

            <div className="flex items-center justify-center gap-2">
              <MdOutlineGroups />
              <span className="">{userDetails.group || "ללא אירגון"}</span>
            </div>

            <div className="flex items-center justify-center gap-2">
              <VscTypeHierarchy />
              <img
                className="h-16 w-16"
                src={typeToImgPath[userDetails.type]}
                alt="icon"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 rounded-xl bg-sky-100 py-4">
        <h1 className="text-5xl">סטטיסטיקות</h1>
        <div className="flex w-full justify-evenly">
          <div className="flex flex-col items-center">
            <img
              className="h-32 w-32"
              src="/statistic-icons/gold-icon.png"
              alt="gold-icon"
            />
            <span className="text-2xl">{userDetails.gold}</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="h-32 w-32"
              src="/statistic-icons/solider-icon.png"
              alt="solider-icon"
            />
            <span className="text-2xl">{userDetails.soliders}</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="h-32 w-32"
              src="/statistic-icons/worker-icon.png"
              alt="worker-icon"
            />
            <span className="text-2xl">{userDetails.workers}</span>
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-6">
          <button
            onClick={() => handleAttack()}
            className="h-12 w-3/4 rounded-full bg-sky-300"
          >
            שלח התקפה
          </button>
          <button className="h-12 w-3/4 rounded-full bg-sky-200">
            שלח הודעה
          </button>
        </div>
      </div>
    </div>
  );
};

export async function loader({ params }) {
  const { username } = params;
  const userInformation = await getUserInformation(username);
  return userInformation;
}

export default UserPage;
