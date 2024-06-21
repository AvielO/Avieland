import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const UserResources = () => {
  const [resources, setResources] = useState({
    copper: 0,
    silver: 0,
    gold: 0,
    diamond: 0,
  });
  const username = useSelector((state) => state.user.username);

  useEffect(() => {
    const fetchResources = async () => {
      const res = await fetch(`${process.env.SERVER_URL}/users/${username}`);
      if (!res.ok) {
        throw new Error("Could not fetch the resources");
      }
      const userResources = await res.json();
      setResources({
        copper: userResources.resources.copper,
        silver: userResources.resources.silver,
        gold: userResources.resources.gold,
        diamond: userResources.resources.diamond,
      });
    };

    fetchResources();
  }, [username]);

  return (
    <div className="my-6 flex w-fit items-center gap-8 p-4">
      <div className="flex items-center gap-2">
        <img
          className="h-12 w-12"
          src="/resources-icons/copper-icon.png"
          alt="copper-resource-icon"
        />
        <span className="text-2xl">{resources.copper}</span>
      </div>
      <div className="flex items-center gap-2">
        <img
          className="h-12 w-12"
          src="/resources-icons/silver-icon.png"
          alt="silver-resource-icon"
        />
        <span className="text-2xl">{resources.silver}</span>
      </div>
      <div className="flex items-center gap-2">
        <img
          className="h-12 w-12"
          src="/resources-icons/gold-icon.png"
          alt="gold-resource-icon"
        />
        <span className="text-2xl">{resources.gold}</span>
      </div>
      <div className="flex items-center gap-2">
        <img
          className="h-11 w-12"
          src="/resources-icons/diamond-icon.png"
          alt="diamond-resource-icon"
        />
        <span className="text-2xl">{resources.diamond}</span>
      </div>
    </div>
  );
};

export default UserResources;
