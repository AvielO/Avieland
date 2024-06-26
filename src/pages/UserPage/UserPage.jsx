import { useLoaderData } from "react-router-dom";
import { getUserInformation } from "../../services/backendAPI.js";

import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { MdOutlineGroups } from "react-icons/md";
import { VscTypeHierarchy } from "react-icons/vsc";

const UserPage = () => {
  const userDetails = useLoaderData();
  //Maybe add created day account
  /*
  userDetails:
    goldAmount, group, id, index, solidersAmounts, type, username, workersAmount
  */

  return (
    <div className="mx-6 grid h-fit grid-cols-2 gap-10">
      <div className="flex flex-col justify-center gap-4 rounded-xl bg-sky-300 py-2">
        <h1 className="text-center text-5xl">מידע על המשתמש X</h1>
        <hr />
        <div className="flex flex-col">
          <div className="flex items-center justify-center gap-6">
            <img
              className="h-64 w-64"
              src="/user-icon.png"
              alt="user-picture"
            />
            <div className="flex flex-col gap-8 text-4xl">
              <div className="flex items-center gap-4">
                <MdOutlineDriveFileRenameOutline />
                <span className="">אביאלו</span>
              </div>

              <div className="flex items-center gap-4">
                <MdOutlineGroups />
                <span className="">המננצחים</span>
              </div>

              <div className="flex items-center gap-4">
                <VscTypeHierarchy />
                <span className="">סוג גברי</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center rounded-xl bg-sky-100 py-2">
        <h1 className="text-6xl">סטטיסטיקות</h1>
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
