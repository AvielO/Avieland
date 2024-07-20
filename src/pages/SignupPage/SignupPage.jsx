import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { userLogin } from "../../slices/userSlice";

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
        const res = await fetch(`${process.env.SERVER_URL}/users`, {
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
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.message);
        }
        dispatch(userLogin(usernameRef.current.value));
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
      <div className="grid h-screen grid-cols-2">
        <div className="flex flex-col items-center justify-center bg-sky-50">
          <h1 className="mx-4 mt-12 text-5xl text-sky-600 transition-all lg:mx-8 lg:text-6xl xl:text-7xl">
            ברוכים הבאים לאביאלנד
          </h1>
          <p className="text-md mx-4 mt-8 transition-all lg:mx-8 lg:text-2xl xl:text-3xl">
            משחק דפדפן בו תוכלו ליצור את הצבא שלכם.
            <br />
            ולהתחרות בחבריכם בטקטיקת המשחק היחודית שלכם
            <br />
            יש לך כבר שחקן? כנס עכשיו!
          </p>
          <button
            onClick={(e) => handleSigninClick(e)}
            className="mx-4 mt-6 h-10 w-32 rounded bg-sky-600 font-semibold text-sky-50 lg:mx-8 lg:h-12 lg:w-40"
          >
            התחברות
          </button>
          <img
            src="/hero.png"
            alt="User Image"
            className="h-96 w-96 md:h-96 md:w-96 lg:h-[40rem] lg:w-[36rem]"
          />
        </div>

        <div className="flex min-h-screen w-full flex-col items-center justify-center gap-[4dvh] bg-sky-200 transition-all sm:gap-[6dvh] lg:gap-[6dvh]">
          <h1 className="text-7xl font-semibold text-sky-600 underline transition-all md:text-8xl lg:text-[120px] xl:text-[130px]">
            הרשמה
          </h1>
          <form className="flex w-4/5 max-w-md flex-col items-center gap-[4dvh] transition-all sm:gap-[5dvh] lg:gap-[5dvh]">
            <div className="flex w-full flex-col gap-2">
              <div className="flex w-full flex-col">
                <label className="text-2xl font-semibold text-sky-800">
                  שם משתמש
                </label>
                <input
                  className="h-7 w-full lg:h-9"
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
              <div className="flex w-full flex-col">
                <label className="text-2xl font-semibold text-sky-800">
                  אימייל
                </label>
                <input
                  className="h-7 w-full lg:h-9"
                  type="email"
                  name="email"
                  ref={emailRef}
                  required
                />
              </div>
            </div>

            <div className="flex w-full flex-col items-center">
              <div className="flex w-full flex-row flex-wrap justify-between">
                <div className="m-2 flex flex-col items-center gap-2">
                  <input
                    className="h-6 w-6"
                    type="checkbox"
                    checked={typeSelected === "attacker"}
                    onChange={() => {
                      handleCheckboxChange("attacker");
                    }}
                  />
                  <img className="h-20 w-20" src={typeToImgPath["attacker"]} />
                </div>
                <div className="m-2 flex flex-col items-center gap-2">
                  <input
                    className="h-6 w-6"
                    type="checkbox"
                    checked={typeSelected === "attdefer"}
                    onChange={() => {
                      handleCheckboxChange("attdefer");
                    }}
                  />
                  <img className="h-20 w-20" src={typeToImgPath["attdefer"]} />
                </div>
                <div className="m-2 flex flex-col items-center gap-2">
                  <input
                    className="h-6 w-6"
                    type="checkbox"
                    checked={typeSelected === "defender"}
                    onChange={() => {
                      handleCheckboxChange("defender");
                    }}
                  />
                  <img className="h-20 w-20" src={typeToImgPath["defender"]} />
                </div>
              </div>
              <div>
                {errors.type && (
                  <span className="text-md font-semibold text-red-500">
                    {errors.type}
                  </span>
                )}
              </div>
            </div>

            <div className="flex w-full flex-col items-center gap-2">
              <div className="flex w-full flex-col">
                <label className="text-2xl font-semibold text-sky-800">
                  סיסמה
                </label>
                <input
                  className="h-7 w-full lg:h-9"
                  type="password"
                  name="password"
                  minLength={6}
                  maxLength={12}
                  ref={passwordRef}
                  required
                />
              </div>
              <div className="flex w-full flex-col">
                <label className="text-2xl font-semibold text-sky-800">
                  חזרו שוב על הסיסמה
                </label>
                <input
                  className="h-7 w-full lg:h-9"
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
                className="mx-2 mt-7 h-10 w-28 rounded bg-sky-600 font-semibold text-sky-50 transition-all lg:mx-8 lg:h-12 lg:w-32"
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
