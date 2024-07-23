import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateResources } from "../../slices/resourcesSlice";
import { fetchWrapper } from "../../utils/fetchWarpper";
import { toast } from "react-toastify";

const Card = ({
  weaponID,
  attack,
  defense,
  weaponName,
  imgPath,
  copperPrice,
  silverPrice,
  goldPrice,
}) => {
  const quantityRef = useRef();
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();

  const handleBuyWeapon = async (weaponID) => {
    try {
      if (quantityRef.current.value <= 0) {
        toast.error("אנא קנה מספר נשקים הגדול מ0");
        return;
      }

      const resourcesState = await fetchWrapper(
        `${process.env.SERVER_URL}/store/${weaponID}`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            username,
            quantity: quantityRef.current.value,
          }),
        },
      );
      dispatch(updateResources(resourcesState));
      quantityRef.current.value = "";
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="flex h-[20rem] w-64 flex-col items-center justify-evenly rounded-3xl bg-sky-300 p-2">
      <div className="flex flex-col items-center">
        <img className="h-24 w-24" src={"user-icon.png"} alt="weapon Png" />
        <span>{weaponName}</span>
      </div>

      <div className="flex flex-col items-center text-xl">
        <span>הגנה: {defense}</span>
        <span>התקפה: {attack}</span>
      </div>

      <div className="flex w-full justify-evenly text-xl">
        <div className="flex items-center">
          <img
            className="h-6 w-6"
            src="/resources-icons/copper-icon.png"
            alt="copper resource"
          />
          <span>{copperPrice}</span>
        </div>
        <div className="flex items-center">
          <img
            className="h-6 w-6"
            src="/resources-icons/silver-icon.png"
            alt="silver resource"
          />
          <span>{silverPrice}</span>
        </div>
        <div className="flex items-center">
          <img
            className="h-6 w-6"
            src="/resources-icons/gold-icon.png"
            alt="gold resource"
          />
          <span>{goldPrice}</span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-1">
          <label>כמות:</label>
          <input
            className="w-14 rounded-lg text-center"
            type="text"
            ref={quantityRef}
          />
        </div>
        <button
          onClick={() => handleBuyWeapon(weaponID)}
          className="w-24 rounded-lg bg-sky-100 p-2"
        >
          קנה עכשיו
        </button>
      </div>
    </div>
  );
};

export default Card;
