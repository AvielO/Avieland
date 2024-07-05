import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateResources } from "../../slices/resourcesSlice";

const HirePage = () => {
  const solidersQuantityRef = useRef();

  const goldWorkerQuantityRef = useRef();
  const silverWorkerQuantityRef = useRef();
  const copperWorkerQuantityRef = useRef();

  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.username);

  const hireWorkers = async (e) => {
    e.preventDefault();

    const res = await fetch(`${process.env.SERVER_URL}/workers`, {
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
    });
    const { updatedWorkersQuantity, updatedResources } = await res.json();
    dispatch(updateResources(updatedResources));
  };

  const hireSoliders = async (e) => {
    e.preventDefault();

    const res = await fetch(`${process.env.SERVER_URL}/soliders`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username,
        solidersQuantity: solidersQuantityRef.current.value,
      }),
    });
    const { updatedSolidersQuantity, updatedResources } = await res.json();
    dispatch(updateResources(updatedResources));
  };

  return (
    <div className="flex flex-col gap-6">
      <section className="flex flex-col items-center gap-6">
        <h1 className="text-5xl font-semibold underline">העסק חיילים</h1>
        <div className="flex w-fit flex-col items-center gap-2 rounded-3xl bg-sky-100 p-4 drop-shadow-md">
          <img
            className="h-64 w-56 rounded-3xl"
            src="background-login.png"
            alt="solider-background"
          />

          <span className="text-2xl font-semibold">חייל התקפי</span>

          <div className="flex flex-col items-center">
            <span className="text-2xl font-semibold">עלות</span>
            <div className="flex items-center">
              <img
                className="h-8 w-8"
                src="/resources-icons/gold-icon.png"
                alt="gold-resource-icon"
              />
              <span className="text-2xl">100</span>
            </div>
          </div>

          <div className="flex items-center gap-1 text-xl">
            <label>כמות: </label>
            <input
              ref={solidersQuantityRef}
              className="h-6 w-12 rounded-full text-center"
            />
          </div>
        </div>
        <div>
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
        <div className="flex w-full justify-around">
          <div className="flex w-fit flex-col items-center gap-2 rounded-3xl bg-sky-100 p-4 drop-shadow-md">
            <img
              className="h-64 w-56 rounded-3xl"
              src="background-login.png"
              alt="solider-background"
            />

            <span className="text-2xl font-semibold">עובד נחושת</span>

            <div className="flex flex-col items-center">
              <span className="text-2xl font-semibold">עלות</span>
              <div className="flex items-center">
                <img
                  className="h-8 w-8"
                  src="/resources-icons/copper-icon.png"
                  alt="copper-resource-icon"
                />
                <span className="text-2xl">100</span>
              </div>
            </div>

            <div className="flex items-center gap-1 text-xl">
              <label>כמות: </label>
              <input
                ref={copperWorkerQuantityRef}
                className="h-6 w-12 rounded-full text-center"
              />
            </div>
          </div>

          <div className="flex w-fit flex-col items-center gap-2 rounded-3xl bg-sky-100 p-4 drop-shadow-md">
            <img
              className="h-64 w-56 rounded-3xl"
              src="background-login.png"
              alt="solider-background"
            />

            <span className="text-2xl font-semibold">עובד כסף</span>

            <div className="flex flex-col items-center">
              <span className="text-2xl font-semibold">עלות</span>
              <div className="flex items-center">
                <img
                  className="h-8 w-8"
                  src="/resources-icons/silver-icon.png"
                  alt="silver-resource-icon"
                />
                <span className="text-2xl">100</span>
              </div>
            </div>

            <div className="flex items-center gap-1 text-xl">
              <label>כמות: </label>
              <input
                ref={silverWorkerQuantityRef}
                className="h-6 w-12 rounded-full text-center"
              />
            </div>
          </div>

          <div className="flex w-fit flex-col items-center gap-2 rounded-3xl bg-sky-100 p-4 drop-shadow-md">
            <img
              className="h-64 w-56 rounded-3xl"
              src="background-login.png"
              alt="solider-background"
            />

            <span className="text-2xl font-semibold">עובד זהב</span>

            <div className="flex flex-col items-center">
              <span className="text-2xl font-semibold">עלות</span>
              <div className="flex items-center">
                <img
                  className="h-8 w-8"
                  src="/resources-icons/gold-icon.png"
                  alt="gold-resource-icon"
                />
                <span className="text-2xl">100</span>
              </div>
            </div>

            <div className="flex items-center gap-1 text-xl">
              <label>כמות: </label>
              <input
                ref={goldWorkerQuantityRef}
                className="h-6 w-12 rounded-full text-center"
              />
            </div>
          </div>
        </div>
        <div>
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
