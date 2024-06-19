import { useEffect } from "react";

const UserResources = () => {
  useEffect(() => {
    //Here I will fetch the resources
  }, []); //When first Mount

  return (
    <div className="my-6 flex items-center gap-8">
      <span>המשאבים שלך הם:</span>
      <div className="flex items-center gap-2">
        <img
          className="h-12 w-12"
          src="/resources-icons/copper-icon.png"
          alt="copper-resource-icon"
        />
        <span className="text-2xl">0</span>
      </div>
      <div className="flex items-center gap-2">
        <img
          className="h-12 w-12"
          src="/resources-icons/silver-icon.png"
          alt="silver-resource-icon"
        />
        <span className="text-2xl">0</span>
      </div>
      <div className="flex items-center gap-2">
        <img
          className="h-12 w-12"
          src="/resources-icons/gold-icon.png"
          alt="gold-resource-icon"
        />
        <span className="text-2xl">0</span>
      </div>
      <div className="flex items-center gap-2">
        <img
          className="h-11 w-12"
          src="/resources-icons/diamond-icon.png"
          alt="diamond-resource-icon"
        />
        <span className="text-2xl">0</span>
      </div>
    </div>
  );
};

export default UserResources;
