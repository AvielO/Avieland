import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateResources } from "../../slices/resourcesSlice";
import { fetchWrapper } from "../../utils/fetchWarpper";
import HireCard from "../../components/HireCard/HireCard";
import { toast } from "react-toastify";

const HirePage = () => {
  const solidersQuantityRef = useRef();
  const goldWorkerQuantityRef = useRef();
  const silverWorkerQuantityRef = useRef();
  const copperWorkerQuantityRef = useRef();

  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.username);

  const hireWorkers = async (e) => {
    e.preventDefault();

    if (
      isNaN(copperWorkerQuantityRef.current.value) ||
      isNaN(silverWorkerQuantityRef.current.value) ||
      isNaN(goldWorkerQuantityRef.current.value)
    ) {
      toast.error("כמות העובדים חייבת להכיל מספר שלם");
      return;
    }
    try {
      const { updatedWorkersQuantity, updatedResources } = await fetchWrapper(
        `${process.env.SERVER_URL}/workers`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            username,
            copperWorkersQuantity: copperWorkerQuantityRef.current.value,
            silverWorkersQuantity: silverWorkerQuantityRef.current.value,
            goldWorkersQuantity: goldWorkerQuantityRef.current.value,
          }),
        },
      );
      dispatch(updateResources(updatedResources));

      copperWorkerQuantityRef.current.value = "";
      silverWorkerQuantityRef.current.value = "";
      goldWorkerQuantityRef.current.value = "";
      toast.success("!העובדים הועסקו בהצלחה");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const hireSoliders = async (e) => {
    e.preventDefault();

    if (isNaN(solidersQuantityRef.current.value)) {
      toast.error("כמות החיילים חייבת להכיל מספר שלם");
      return;
    }
    try {
      const { updatedSolidersQuantity, updatedResources } = await fetchWrapper(
        `${process.env.SERVER_URL}/soliders`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            username,
            solidersQuantity: solidersQuantityRef.current.value,
          }),
        },
      );
      dispatch(updateResources(updatedResources));

      solidersQuantityRef.current.value = "";
      toast.success("!החיילים הועסקו בהצלחה");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <section className="flex flex-col items-center gap-6">
        <h1 className="text-5xl font-semibold underline">העסק חיילים</h1>
        <HireCard
          workerPictureURL={"/npc-pictures/knight.png"}
          title={"חייל התקפי"}
          resourcePictureURL={"/resources-icons/gold-icon.png"}
          price={100}
          resourceRef={solidersQuantityRef}
        />

        <div className="flex flex-col items-center gap-2">
          <button
            onClick={(e) => hireSoliders(e)}
            className="rounded-2xl bg-sky-300 px-4 py-2 text-2xl"
          >
            העסק חיילים
          </button>
        </div>
      </section>

      <section className="flex flex-col items-center gap-6">
        <h1 className="text-5xl font-semibold underline">העסק עובדים</h1>
        <div className="flex w-full flex-wrap justify-evenly">
          <HireCard
            workerPictureURL={"workers-icons/copper-worker.png"}
            title={"עובד נחושת"}
            resourcePictureURL={"/resources-icons/copper-icon.png"}
            price={100}
            resourceRef={copperWorkerQuantityRef}
          />

          <HireCard
            workerPictureURL={"workers-icons/silver-worker.png"}
            title={"עובד כסף"}
            resourcePictureURL={"/resources-icons/silver-icon.png"}
            price={100}
            resourceRef={silverWorkerQuantityRef}
          />

          <HireCard
            workerPictureURL={"workers-icons/gold-worker.png"}
            title={"עובד זהב"}
            resourcePictureURL={"/resources-icons/gold-icon.png"}
            price={100}
            resourceRef={goldWorkerQuantityRef}
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <button
            onClick={(e) => hireWorkers(e)}
            className="rounded-2xl bg-sky-300 px-4 py-2 text-2xl"
          >
            העסק עובדים
          </button>
        </div>
      </section>
    </div>
  );
};

export default HirePage;
