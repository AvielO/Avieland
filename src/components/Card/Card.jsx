const Card = ({ attack, defense, weaponName, imgPath, price }) => {
  return (
    <div className="flex h-[20rem] w-64 flex-col items-center justify-evenly rounded-3xl bg-sky-400">
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
          <span>{price.copper}</span>
        </div>
        <div className="flex items-center">
          <img
            className="h-6 w-6"
            src="/resources-icons/silver-icon.png"
            alt="silver resource"
          />
          <span>{price.silver}</span>
        </div>
        <div className="flex items-center">
          <img
            className="h-6 w-6"
            src="/resources-icons/gold-icon.png"
            alt="gold resource"
          />
          <span>{price.gold}</span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-1">
          <label>כמות:</label>
          <input className="w-14 rounded-lg text-center" type="text" />
        </div>

        <button className="w-24 rounded-lg bg-sky-100 p-2">קנה עכשיו</button>
      </div>
    </div>
  );
};

export default Card;
