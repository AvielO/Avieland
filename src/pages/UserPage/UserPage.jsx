import { useLoaderData } from "react-router-dom";
import { getUserInformation } from "../../services/backendAPI.js";

const UserPage = () => {
  const userDetails = useLoaderData();
  //Maybe add created day account
  /*
  userDetails:
    goldAmount, group, id, index, solidersAmounts, type, username, workersAmount
  */

  return (
    <>
      <span>UserPage: {userDetails.id}</span>
    </>
  );
};

export async function loader({ params }) {
  const { username } = params;
  const userInformation = await getUserInformation(username);
  return userInformation;
}

export default UserPage;
