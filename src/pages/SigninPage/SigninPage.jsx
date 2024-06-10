const SigninPage = () => {
  return (
    //justify-center - Vertically - אנכי
    //items-center - Horizontally - אופקי

    <div className="grid h-screen grid-cols-2">
      <div className="bg-sky-200 flex flex-col items-center justify-center gap-6">
        <p className="text-sky-600 mb-4 text-7xl font-semibold underline md:text-8xl lg:mb-10 lg:text-9xl">
          כניסה
        </p>

        <img
          src="/user-icon.png"
          alt="User Image"
          className="h-20 w-20 md:h-24 md:w-24 lg:h-48 lg:w-48"
        />

        <form className="flex flex-col items-center gap-4">
          <div className="m-2 flex flex-col gap-1">
            <label className="font-semibold">שם משתמש</label>
            <input
              type="text"
              name="name"
              className="rounded border p-2 lg:h-11 lg:w-96"
              required
            />
          </div>

          <div className="m-2 flex flex-col gap-1">
            <label className="font-semibold">סיסמה</label>
            <input
              type="password"
              name="password"
              className="rounded border p-2 lg:h-11 lg:w-96"
              required
            />
          </div>

          <div>
            <button className="bg-sky-600 text-sky-50 mt-8 rounded px-4 py-2">
              התחברות
            </button>
          </div>
        </form>
      </div>

      <div className="bg-sky-50 flex flex-col">
        <h1 className="text-sky-600 mx-4 mt-12 text-5xl lg:mx-8 lg:text-8xl">
          ברוכים הבאים לאביאלנד
        </h1>
        <p className="text-md mx-4 mt-8 lg:mx-8 lg:text-2xl">
          משחק דפדפן אינטרנט בו תוכלו ליצור את הצבא שלכם.
          <br />
          משחק שבו תוכלו להתחרות בחברים בטקטיקת המשחק היחודית שלכם.
          <br />
          הירשמו עכשיו ונסו להיות האדם בעל הצבא החזק במשחק!
        </p>
        <button className="bg-sky-600 text-sky-50 mx-4 mt-6 h-10 w-32 rounded lg:mx-8 lg:h-12 lg:w-40">
          הרשמה
        </button>
        {/* Some Image */}
      </div>
    </div>
  );
};

export default SigninPage;
