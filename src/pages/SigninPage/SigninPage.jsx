import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../../slices/userSlice";
import { fetchWrapper } from "../../utils/fetchWarpper";

const SigninPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    general: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSigninClick = async (e) => {
    e.preventDefault();
    const newErrors = {};
    setErrors(newErrors);

    if (username.trim() === "" || password.trim() === "") {
      setErrors({
        general: "שם משתמש או סיסמה חסרים.",
      });
      return;
    }
    if (username.length < 3 || username.length > 16) {
      newErrors.username = "שם המשתמש חייב להכיל בין 3 ל 16 תווים";
    }
    if (password.length < 6 || password.length > 24) {
      newErrors.password = "הסיסמה חייבת להכיל בין 6 ל24 תווים";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    try {
      const res = await fetchWrapper(
        `${process.env.SERVER_URL}/auth?username=${username}&password=${password}`,
      );
      dispatch(userLogin(username));
      navigate("/home");
    } catch (err) {
      setErrors({ general: err.message });
    }
  };

  const handleSignupClick = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  return (
    //justify-center - Vertically - אנכי
    //items-center - Horizontally - אופקי

    <div className="flex h-screen w-full flex-col md:flex-row">
      <div className="flex flex-col items-center justify-center gap-6 bg-sky-200 bg-cover bg-center md:w-1/2">
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
              className="rounded border p-2 md:w-[18rem] lg:h-12 lg:w-[42rem]"
              onChange={(e) => setUsername(e.target.value)}
              minLength={3}
              maxLength={12}
              required
            />
            <span className="text-md font-semibold text-red-400">
              {errors.username && errors.username}
            </span>
          </div>

          <div className="m-2 flex flex-col gap-1">
            <label className="font-semibold">סיסמה</label>
            <input
              type="password"
              name="password"
              value={password}
              minLength={6}
              maxLength={24}
              className="rounded border p-2 md:w-[18rem] lg:h-12 lg:w-[42rem]"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="text-md font-semibold text-red-400">
              {errors.password && errors.password}
            </span>
          </div>
          <span className="text-2xl font-semibold text-red-500">
            {errors.general ? errors.general : ""}
          </span>
          <div>
            <button
              onClick={(e) => handleSigninClick(e)}
              className="mb-4 rounded-full bg-sky-600 px-6 py-4 font-semibold text-sky-50"
            >
              התחברות
            </button>
          </div>
        </form>
      </div>

      <div className="flex flex-col items-center justify-center bg-sky-50 md:w-1/2">
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
