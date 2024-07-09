import { useSelector } from "react-redux";

const BankPage = () => {
  const { copper, silver, gold } = useSelector((state) => state.resources);

  return (
    <div className="flex flex-col items-center gap-28">
      <section className="flex w-2/3 flex-col items-center gap-6 rounded-full bg-sky-300 py-4">
        <div className="-mt-14 rounded-full bg-white p-4">
          <img
            className="h-16 w-16"
            src="/resources-icons/copper-icon.png"
            alt="copper-resource-icon"
          />
        </div>

        <div className="flex w-full justify-around">
          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl font-semibold">
              יתרה להפקדה: {copper}
            </span>
            <input className="w-2/3 rounded-full bg-white p-2 text-center" />
            <button className="w-full rounded-full bg-sky-500 px-4 py-2 text-xl font-semibold text-white">
              הפקד נחושת
            </button>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl font-semibold">יתרה למשיכה: 15000</span>
            <input className="w-2/3 rounded-full bg-white p-2 text-center" />
            <button className="w-full rounded-full bg-sky-500 px-4 py-2 text-xl font-semibold text-white">
              משוך נחושת
            </button>
          </div>
        </div>
      </section>

      <section className="flex w-2/3 flex-col items-center gap-6 rounded-full bg-sky-300 py-4">
        <div className="-mt-14 rounded-full bg-white p-4">
          <img
            className="h-16 w-16"
            src="/resources-icons/silver-icon.png"
            alt="silver-resource-icon"
          />
        </div>

        <div className="flex w-full justify-around">
          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl font-semibold">
              יתרה להפקדה: {silver}
            </span>
            <input className="w-2/3 rounded-full bg-white p-2 text-center" />
            <button className="w-full rounded-full bg-sky-500 px-4 py-2 text-xl font-semibold text-white">
              הפקד כסף
            </button>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl font-semibold">יתרה להפקדה: 15000</span>
            <input className="w-2/3 rounded-full bg-white p-2 text-center" />
            <button className="w-full rounded-full bg-sky-500 px-4 py-2 text-xl font-semibold text-white">
              משוך כסף
            </button>
          </div>
        </div>
      </section>

      <section className="flex w-2/3 flex-col items-center gap-6 rounded-full bg-sky-300 py-4">
        <div className="-mt-14 rounded-full bg-white p-4">
          <img
            className="h-16 w-16"
            src="/resources-icons/gold-icon.png"
            alt="gold-resource-icon"
          />
        </div>

        <div className="flex w-full justify-around">
          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl font-semibold">יתרה להפקדה: {gold}</span>
            <input className="w-2/3 rounded-full bg-white p-2 text-center" />
            <button className="w-full rounded-full bg-sky-500 px-4 py-2 text-xl font-semibold text-white">
              הפקד זהב
            </button>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl font-semibold">יתרה להפקדה: 15000</span>
            <input className="w-2/3 rounded-full bg-white p-2 text-center" />
            <button className="w-full rounded-full bg-sky-500 px-4 py-2 text-xl font-semibold text-white">
              משוך זהב
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BankPage;
