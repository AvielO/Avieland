const HirePage = () => {
  return (
    <div className="">
      <section className="flex flex-col items-center gap-6">
        <h1 className="text-5xl font-semibold underline">העסק חיילים</h1>
        <div className="flex w-fit flex-col items-center gap-2 rounded-3xl bg-sky-100 p-4">
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
            <input className="h-6 w-12 rounded-full text-center" />
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-8">
        <h1 className="text-5xl font-semibold">העסק חיילים</h1>
        <div className="flex w-fit flex-col items-center gap-2 rounded-3xl bg-sky-100 p-4">
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
            <input className="h-6 w-12 rounded-full text-center" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HirePage;
