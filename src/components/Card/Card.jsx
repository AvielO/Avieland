const Card = () => {
  return (
    <div className="flex h-[20rem] w-64 flex-col items-center justify-evenly rounded-3xl bg-sky-400">
      <img className="h-24 w-24" src="/user-icon.png" alt="weapon Png" />
      <div className="flex flex-col items-center text-xl">
        <span>הגנה: 1200</span>
        <span>התקפה: 1200</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <input className="w-14 rounded-lg" type="text" />
        <button className="w-24 rounded-lg bg-sky-100 p-2">קנה עכשיו</button>
      </div>
    </div>
  );
};

export default Card;
