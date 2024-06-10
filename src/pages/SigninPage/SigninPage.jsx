import { useNavigate } from "react-router-dom";

const SigninPage = () => {
  const navigate = useNavigate();

  const handleSigninClick = (e) => {
    e.preventDefault();
    //Will send to the server a request with credentials
    //check if there is a user exists
    // if yes, nevigate and saves to redux
    // if not, will send to the user an error, there is no user/password is not correct - I'll decide later
  };

  const handleSignupClick = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  return (
    //justify-center - Vertically - אנכי
    //items-center - Horizontally - אופקי

    <div className="grid h-screen grid-cols-2">
      <div className="bg-sky-200 flex flex-col items-center justify-center gap-6 bg-cover bg-center">
        <p className="text-sky-600 mb-4 text-7xl font-semibold underline md:text-8xl lg:mb-10 lg:text-[168px]">
          כניסה
        </p>

        <img
          src="/user-icon.png"
          alt="User Image"
          className="h-20 w-20 md:h-24 md:w-24 lg:h-64 lg:w-64"
        />

        <form className="flex flex-col items-center gap-4">
          <div className="m-2 flex flex-col gap-1">
            <label className="font-semibold">שם משתמש</label>
            <input
              type="text"
              name="name"
              className="rounded border p-2 lg:h-12 lg:w-[42rem]"
              required
            />
          </div>

          <div className="m-2 flex flex-col gap-1">
            <label className="font-semibold">סיסמה</label>
            <input
              type="password"
              name="password"
              className="rounded border p-2 lg:h-12 lg:w-[42rem]"
              required
            />
          </div>

          <div>
            <button
              onClick={(e) => handleSigninClick(e)}
              className="bg-sky-600 text-sky-50 mt-8 rounded px-6 py-4 font-semibold"
            >
              התחברות
            </button>
          </div>
        </form>
      </div>

      <div className="bg-sky-50 flex flex-col items-center justify-center">
        <h1 className="text-sky-600 mx-4 mt-12 text-5xl lg:mx-8 lg:text-8xl">
          ברוכים הבאים לאביאלנד
        </h1>
        <p className="text-md mx-4 mt-8 lg:mx-8 lg:text-3xl">
          משחק דפדפן אינטרנט בו תוכלו ליצור את הצבא שלכם.
          <br />
          משחק שבו תוכלו להתחרות בחברים בטקטיקת המשחק היחודית שלכם.
          <br />
          הירשמו עכשיו ונסו להיות האדם בעל הצבא החזק במשחק!
        </p>
        <button
          onClick={(e) => handleSignupClick(e)}
          className="bg-sky-600 text-sky-50 mx-4 mt-6 h-10 w-32 rounded font-semibold lg:mx-8 lg:h-12 lg:w-40"
        >
          הרשמה
        </button>
        <img
          src="/swords.png"
          alt="User Image"
          className="h-96 w-96 md:h-96 md:w-96 lg:h-[32rem] lg:w-[32rem]"
        />
      </div>
    </div>
  );
};

export default SigninPage;
