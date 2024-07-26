const ForgotPasswordPage = () => {
  return (
    <div className="bg-blueBackground flex h-full flex-col items-center justify-center">
      <div className="m-3 flex flex-col gap-3 rounded-3xl bg-white p-8">
        <div className="flex items-center justify-center">
          <img
            className="h-72 w-72 md:h-96 md:w-96 lg:h-[32rem] lg:w-[32rem]"
            src="/forgot-password.png"
          />
        </div>
        <div className="flex w-full flex-col items-center gap-4">
          <div className="flex w-2/3 flex-col gap-1">
            <label className="text-xl font-semibold">שם משתמש</label>
            <input
              className="h-8 rounded border border-black p-2"
              type="text"
            />
          </div>
          <div className="flex w-2/3 flex-col gap-1">
            <label className="text-xl font-semibold">אימייל</label>
            <input
              className="h-8 rounded border border-black p-2"
              type="email"
            />
          </div>
          <button className="bg-blueBackground rounded px-4 py-2 text-white">
            שלח
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
