import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateResources } from "../../slices/resourcesSlice";
import { fetchWrapper } from "../../utils/fetchWarpper";
import { toast } from "react-toastify";

const BankPage = () => {
  const username = useSelector((state) => state.user.username);
  const { copper, silver, gold } = useSelector((state) => state.resources);
  const [bankResources, setBankResources] = useState({
    copper: 0,
    silver: 0,
    gold: 0,
  });
  const dispatch = useDispatch();

  const copperDepRef = useRef();
  const copperWithRef = useRef();

  const silverDepRef = useRef();
  const silverWithRef = useRef();

  const goldDepRef = useRef();
  const goldWithRef = useRef();

  useEffect(() => {
    const getBankResources = async () => {
      const { bank: bankResources } = await fetchWrapper(
        `${process.env.SERVER_URL}/users/${username}/bank`,
      );
      setBankResources(bankResources);
    };

    getBankResources();
  }, []);

  const handleDeposit = async (e, resourceName) => {
    e.preventDefault();
    try {
      const { updatedResources, updatedBankResources } = await fetchWrapper(
        `${process.env.SERVER_URL}/bank/${username}/deposit`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            resourceName,
            copperToDeposit: copperDepRef.current.value,
            silverToDeposit: silverDepRef.current.value,
            goldToDeposit: goldDepRef.current.value,
          }),
        },
      );
      dispatch(updateResources(updatedResources));
      setBankResources(updatedBankResources);
      toast.success("!הפקדת המשאבים הסתיימה בהצלחה");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleWithdraw = async (e, resourceName) => {
    e.preventDefault();

    try {
      const { updatedResources, updatedBankResources } = await fetchWrapper(
        `${process.env.SERVER_URL}/bank/${username}/withdraw`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            resourceName,
            copperToWithdraw: copperWithRef.current.value,
            silverToWithdraw: silverWithRef.current.value,
            goldToWithdraw: goldWithRef.current.value,
          }),
        },
      );
      dispatch(updateResources(updatedResources));
      setBankResources(updatedBankResources);
      toast.success("!משיכת המשאבים הסתיימה בהצלחה");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center gap-24">
      <section className="flex w-2/3 flex-col items-center gap-6 rounded-3xl bg-sky-300 py-4">
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
            <input
              className="w-2/3 rounded-full bg-white p-2 text-center"
              ref={copperDepRef}
            />
            <button
              onClick={(e) => handleDeposit(e, "copper")}
              className="w-full rounded-full bg-sky-500 px-4 py-2 text-xl font-semibold text-white"
            >
              הפקד נחושת
            </button>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl font-semibold">
              יתרה למשיכה: {bankResources.copper}
            </span>
            <input
              className="w-2/3 rounded-full bg-white p-2 text-center"
              ref={copperWithRef}
            />
            <button
              onClick={(e) => handleWithdraw(e, "copper")}
              className="w-full rounded-full bg-sky-500 px-4 py-2 text-xl font-semibold text-white"
            >
              משוך נחושת
            </button>
          </div>
        </div>
      </section>

      <section className="flex w-2/3 flex-col items-center gap-6 rounded-3xl bg-sky-300 py-4">
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
            <input
              className="w-2/3 rounded-full bg-white p-2 text-center"
              ref={silverDepRef}
            />
            <button
              onClick={(e) => handleDeposit(e, "silver")}
              className="w-full rounded-full bg-sky-500 px-4 py-2 text-xl font-semibold text-white"
            >
              הפקד כסף
            </button>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl font-semibold">
              יתרה למשיכה: {bankResources.silver}
            </span>
            <input
              className="w-2/3 rounded-full bg-white p-2 text-center"
              ref={silverWithRef}
            />
            <button
              onClick={(e) => handleWithdraw(e, "silver")}
              className="w-full rounded-full bg-sky-500 px-4 py-2 text-xl font-semibold text-white"
            >
              משוך כסף
            </button>
          </div>
        </div>
      </section>

      <section className="flex w-2/3 flex-col items-center gap-6 rounded-3xl bg-sky-300 py-4">
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
            <input
              className="w-2/3 rounded-full bg-white p-2 text-center"
              ref={goldDepRef}
            />
            <button
              onClick={(e) => handleDeposit(e, "gold")}
              className="w-full rounded-full bg-sky-500 px-4 py-2 text-xl font-semibold text-white"
            >
              הפקד זהב
            </button>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl font-semibold">
              יתרה למשיכה: {bankResources.gold}
            </span>
            <input
              className="w-2/3 rounded-full bg-white p-2 text-center"
              ref={goldWithRef}
            />
            <button
              onClick={(e) => handleWithdraw(e, "gold")}
              className="w-full rounded-full bg-sky-500 px-4 py-2 text-xl font-semibold text-white"
            >
              משוך זהב
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BankPage;
