import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../../slices/userSlice";
import { fetchWrapper } from "../../utils/fetchWarpper";
import { toast } from "react-toastify";

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
      toast.success("!ההתחברות התבצעה בהצלחה");
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
      <div className="bg-grayBackground flex flex-col items-center justify-center gap-6 bg-cover bg-center py-4 md:w-1/2">
        <p className="text-7xl font-semibold text-black transition-all lg:mb-10 lg:text-[6rem] xl:text-[7rem] 2xl:text-[8rem]">
          כניסה
        </p>

        <form className="flex flex-col items-center gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-xl font-semibold">שם משתמש</label>
            <input
              type="text"
              name="name"
              value={username}
              className="h-9 w-64 rounded-md border border-black px-2 text-xl transition-all md:h-9 md:w-72 lg:h-12 lg:w-96 xl:w-[32rem] 2xl:w-[42rem]"
              onChange={(e) => setUsername(e.target.value)}
              minLength={3}
              maxLength={12}
              required
            />
            <span className="text-md font-semibold text-red-400">
              {errors.username && errors.username}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xl font-semibold">סיסמה</label>
            <input
              type="password"
              name="password"
              value={password}
              minLength={6}
              maxLength={24}
              className="h-9 w-64 rounded-md border border-black px-2 text-xl transition-all md:h-9 md:w-72 lg:h-12 lg:w-96 xl:w-[32rem] 2xl:w-[42rem]"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Link to="/forgot-password">
              <span className="text-md cursor-pointer font-semibold text-blue-600">
                שכחתי סיסמה
              </span>
            </Link>

            <span className="text-md font-semibold text-red-400">
              {errors.password && errors.password}
            </span>
          </div>

          <span className="text-2xl font-semibold text-red-500">
            {errors.general ? errors.general : ""}
          </span>

          <button
            onClick={(e) => handleSigninClick(e)}
            className="bg-blueBackground rounded-2xl px-6 py-4 font-semibold text-white"
          >
            התחברות
          </button>
        </form>
      </div>

      <div className="bg-blueBackground flex flex-col items-center justify-center p-8 md:w-1/2">
        <h1 className="mb-4 text-center text-5xl text-white transition-all lg:text-6xl xl:mb-6 xl:text-7xl 2xl:mb-8 2xl:text-8xl">
          ברוכים הבאים לאביאלנד
        </h1>
        <p className="text-md text-center text-gray-200 transition-all lg:mb-2 lg:text-xl xl:text-2xl 2xl:text-3xl">
          משחק דפדפן בו תוכלו ליצור את הצבא שלכם
          <br />
          להתחרות בחבריכם בטקטיקת המשחק היחודית שלכם.
          <br />
          הירשמו עכשיו ונסו להיות האדם בעל הצבא החזק ביותר!
        </p>
        <button
          onClick={(e) => handleSignupClick(e)}
          className="text-blueBackground mx-4 mt-6 h-10 w-32 rounded bg-white font-semibold lg:mx-8 lg:h-12 lg:w-40"
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
