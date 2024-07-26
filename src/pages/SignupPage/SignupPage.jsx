import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { userLogin } from "../../slices/userSlice";
import { fetchWrapper } from "../../utils/fetchWarpper";
import { toast } from "react-toastify";
import Tooltip from "../../components/Tooltip/Tooltip";

const typeToImgPath = {
  attacker: "/player-type-icons/attacker-icon.png",
  defender: "/player-type-icons/defender-icon.png",
  attdefer: "/player-type-icons/attdefer-icon.png",
};

const SignupPage = () => {
  const usernameRef = useRef();
  const emailRef = useRef();

  const passwordRef = useRef();
  const passwordAgainRef = useRef();
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    general: "",
  });
  const [typeSelected, setTypeSelected] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignup = async (e) => {
    e.preventDefault();

    const newErrors = {};
    setErrors(newErrors);

    if (
      usernameRef.current.value.trim() === "" ||
      emailRef.current.value.trim() === "" ||
      passwordRef.current.value.trim() === "" ||
      passwordAgainRef.current.value.trim() === ""
    ) {
      newErrors.general = "אנא מלא את כל השדות הנדרשים";
    }

    if (
      usernameRef.current.value.length < 3 ||
      usernameRef.current.value.length > 12
    ) {
      newErrors.username = "שם המשתמש חייב להכיל בין 3 ל12 תווים";
    }
    if (
      passwordRef.current.value.length < 6 ||
      passwordRef.current.value.length > 24
    ) {
      newErrors.password = "הסיסמה חייבת להכיל בין 6 ל24 תווים";
    }
    if (passwordRef.current.value !== passwordAgainRef.current.value) {
      newErrors.password = "הסיסמאות לא תואמות אחת לשנייה";
    }
    if (!typeSelected) {
      newErrors.type = "אנא בחר סוג שחקן";
    }

    //Signup and navigate
    if (Object.keys(newErrors).length === 0) {
      try {
        const res = await fetchWrapper(`${process.env.SERVER_URL}/users`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            username: usernameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            passwordAgain: passwordAgainRef.current.value,
            type: typeSelected,
          }),
        });
        dispatch(userLogin(usernameRef.current.value));
        toast.success("!ההרשמה התבצעה בהצלחה");
        navigate("/home");
      } catch (err) {
        setErrors({ general: err.message });
      }
    } else {
      setErrors(newErrors);
    }
  };

  const handleSigninClick = (e) => {
    e.preventDefault();
    navigate("/signin");
  };

  const handleCheckboxChange = (type) => {
    if (type === typeSelected) {
      setTypeSelected(null);
    } else {
      setTypeSelected(type);
    }
  };

  return (
    <>
      <div className="flex w-full flex-col md:flex-row">
        <div className="bg-blueBackground flex flex-col items-center justify-center p-8 md:w-1/2">
          <h1 className="mb-4 text-center text-5xl text-white transition-all lg:text-6xl xl:mb-6 xl:text-7xl 2xl:mb-8 2xl:text-8xl">
            ברוכים הבאים לאביאלנד
          </h1>
          <p className="text-md text-center text-gray-200 transition-all lg:mb-2 lg:text-xl xl:text-2xl 2xl:text-3xl">
            משחק דפדפן בו תוכלו ליצור את הצבא שלכם
            <br />
            ולהתחרות בחבריכם בטקטיקת המשחק היחודית שלכם.
            <br />
            הירשמו עכשיו ונסו להיות האדם בעל הצבא החזק ביותר!
          </p>
          <button
            onClick={(e) => handleSigninClick(e)}
            className="text-blueBackground mx-4 mt-6 rounded bg-white px-10 py-3 font-semibold"
          >
            התחברות
          </button>
          <img
            src="/hero.png"
            alt="User Image"
            className="h-96 w-96 md:h-96 md:w-96 lg:h-[40rem] lg:w-[36rem]"
          />
        </div>

        <div className="bg-grayBackground flex min-h-screen flex-col items-center justify-center gap-[4dvh] transition-all md:w-1/2">
          <h1 className="text-7xl font-semibold text-black transition-all lg:text-[6rem] xl:text-[7rem] 2xl:text-[8rem]">
            הרשמה
          </h1>
          <form className="flex flex-col items-center gap-10 transition-all lg:gap-[4dvh]">
            <div className="flex w-full flex-col gap-6">
              <div className="flex w-full flex-col gap-2">
                <label className="text-xl font-semibold">שם משתמש</label>
                <input
                  className="h-9 w-64 rounded-md border border-black px-2 text-xl transition-all md:h-9 md:w-72 lg:h-12 lg:w-96 xl:w-[32rem] 2xl:w-[42rem]"
                  type="text"
                  name="text"
                  minLength={3}
                  maxLength={12}
                  ref={usernameRef}
                  required
                />
                {errors.username && (
                  <span className="text-md font-semibold text-red-500">
                    {errors.username}
                  </span>
                )}
              </div>
              <div className="flex w-full flex-col gap-2">
                <label className="text-xl font-semibold">אימייל</label>
                <input
                  className="h-9 w-64 rounded-md border border-black px-2 text-xl transition-all md:h-9 md:w-72 lg:h-12 lg:w-96 xl:w-[32rem] 2xl:w-[42rem]"
                  type="email"
                  name="email"
                  ref={emailRef}
                  required
                />
              </div>
            </div>

            <div className="flex w-full flex-col items-center gap-2">
              <span className="text-xl font-semibold">סוג שחקן</span>
              <div className="flex w-full flex-row flex-wrap justify-evenly">
                <Tooltip text="מעניק עוד 15% התקפה כאשר אתה התוקף">
                  <div className="m-2 flex flex-col items-center gap-2">
                    <input
                      className="h-6 w-6 cursor-pointer"
                      type="checkbox"
                      checked={typeSelected === "attacker"}
                      onChange={() => {
                        handleCheckboxChange("attacker");
                      }}
                    />
                    <img
                      className="h-20 w-20"
                      src={typeToImgPath["attacker"]}
                    />
                    <label className="text-sm font-semibold">התקפי</label>
                  </div>
                </Tooltip>
                <Tooltip text="מעניק עוד 10% התקפה כאשר אתה התוקף ועוד 10% הגנה כאשר אתה המותקף">
                  <div className="m-2 flex flex-col items-center gap-2">
                    <input
                      className="h-6 w-6 cursor-pointer"
                      type="checkbox"
                      checked={typeSelected === "attdefer"}
                      onChange={() => {
                        handleCheckboxChange("attdefer");
                      }}
                    />
                    <img
                      className="h-20 w-20"
                      src={typeToImgPath["attdefer"]}
                    />
                    <label className="text-sm font-semibold">ביניים</label>
                  </div>
                </Tooltip>
                <Tooltip text="מעניק עוד 15% הגנה כאשר אתה מותקף">
                  <div className="m-2 flex flex-col items-center gap-2">
                    <input
                      className="h-6 w-6 cursor-pointer"
                      type="checkbox"
                      checked={typeSelected === "defender"}
                      onChange={() => {
                        handleCheckboxChange("defender");
                      }}
                    />
                    <img
                      className="h-20 w-20"
                      src={typeToImgPath["defender"]}
                    />
                    <label className="text-sm font-semibold">הגנתי</label>
                  </div>
                </Tooltip>
              </div>
              <div>
                {errors.type && (
                  <span className="text-md font-semibold text-red-500">
                    {errors.type}
                  </span>
                )}
              </div>
            </div>

            <div className="flex w-full flex-col items-center gap-6">
              <div className="flex w-full flex-col gap-2">
                <label className="text-xl font-semibold">סיסמה</label>
                <input
                  className="h-9 w-64 rounded-md border border-black px-2 text-xl transition-all md:h-9 md:w-72 lg:h-12 lg:w-96 xl:w-[32rem] 2xl:w-[42rem]"
                  type="password"
                  name="password"
                  minLength={6}
                  maxLength={12}
                  ref={passwordRef}
                  required
                />
              </div>
              <div className="flex w-full flex-col gap-2">
                <label className="text-xl font-semibold">
                  חזרו שוב על הסיסמה
                </label>
                <input
                  className="h-9 w-64 rounded-md border border-black px-2 text-xl transition-all md:h-9 md:w-72 lg:h-12 lg:w-96 xl:w-[32rem] 2xl:w-[42rem]"
                  type="password"
                  name="password"
                  minLength={6}
                  maxLength={12}
                  ref={passwordAgainRef}
                  required
                />
                {errors.password && (
                  <span className="text-md font-semibold text-red-500">
                    {errors.password}
                  </span>
                )}
              </div>
              {errors.general && (
                <span className="text-xl font-semibold text-red-500">
                  {errors.general}
                </span>
              )}
              <button
                onClick={(e) => handleSignup(e)}
                className="bg-blueBackground mx-4 mt-6 rounded px-10 py-3 font-semibold text-white"
              >
                הירשם
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
