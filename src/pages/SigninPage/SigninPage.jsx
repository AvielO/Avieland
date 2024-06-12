import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SigninPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSigninClick = async (e) => {
    e.preventDefault();
    setError("");
    if (!username || !password) return;

    try {
      const res = await fetch(
        `${process.env.SERVER_URL}/user?username=${username}&password=${password}`,
      );
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message);
      }
    } catch (err) {
      setError(err.message);
    }

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
      <div className="flex flex-col items-center justify-center gap-6 bg-sky-200 bg-cover bg-center">
        <p className="mb-4 text-7xl font-semibold text-sky-600 underline md:text-8xl lg:mb-10 lg:text-[168px]">
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
              value={username}
              className="rounded border p-2 lg:h-12 lg:w-[42rem]"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="m-2 flex flex-col gap-1">
            <label className="font-semibold">סיסמה</label>
            <input
              type="password"
              name="password"
              value={password}
              className="rounded border p-2 lg:h-12 lg:w-[42rem]"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <span className="text-2xl font-semibold text-red-500">
            {error ? error : ""}
          </span>
          <div>
            <button
              onClick={(e) => handleSigninClick(e)}
              className="rounded bg-sky-600 px-6 py-4 font-semibold text-sky-50"
            >
              התחברות
            </button>
          </div>
        </form>
      </div>

      <div className="flex flex-col items-center justify-center bg-sky-50">
        <h1 className="mx-4 mt-12 text-5xl text-sky-600 lg:mx-8 lg:text-8xl">
          ברוכים הבאים לאביאלנד
        </h1>
        <p className="text-md mx-4 mt-8 lg:mx-8 lg:text-3xl">
          משחק דפדפן בו תוכלו ליצור את הצבא שלכם.
          <br />
          משחק שבו תוכלו להתחרות בחבריכם בטקטיקת המשחק היחודית שלכם.
          <br />
          הירשמו עכשיו ונסו להיות האדם בעל הצבא החזק במשחק!
        </p>
        <button
          onClick={(e) => handleSignupClick(e)}
          className="mx-4 mt-6 h-10 w-32 rounded bg-sky-600 font-semibold text-sky-50 lg:mx-8 lg:h-12 lg:w-40"
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
