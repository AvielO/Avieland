import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { userLogin } from "../../slices/userSlice";

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

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignup = async (e) => {
    e.preventDefault();

    const newErrors = {
      username: "",
      password: "",
      general: "",
    };
    setErrors(newErrors);

    if (
      !usernameRef.current.value ||
      !emailRef.current.value ||
      !passwordRef.current.value ||
      !passwordAgainRef.current.value
    ) {
      newErrors.general = "אנא מלא את כל השדות הנדרשים";
    }

    if (passwordRef.current.value !== passwordAgainRef.current.value) {
      newErrors.password = "הסיסמאות לא תואמות אחת לשנייה";
    }

    if (!newErrors.username && !newErrors.password && !newErrors.general) {
      //Signup and navigate
      const res = await fetch(`${process.env.SERVER_URL}/user`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          username: usernameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
          passwordAgain: passwordAgainRef.current.value,
        }),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message);
      }
      dispatch(userLogin(usernameRef.current.value));
      navigate("/home");
    } else {
      setErrors(newErrors);
    }
  };

  const handleSigninClick = (e) => {
    e.preventDefault();
    navigate("/signin");
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
            משחק שבו תוכלו להתחרות בחבריכם בטקטיקת המשחק היחודית שלכם.
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

        <div className="flex min-h-screen w-full flex-col items-center justify-center gap-[4dvh] bg-sky-200 transition-all sm:gap-[6dvh] lg:gap-[8dvh]">
          <h1 className="text-7xl font-semibold text-sky-600 underline transition-all md:text-8xl lg:text-[120px] xl:text-[130px]">
            הרשמה
          </h1>
          <form className="flex w-4/5 max-w-md flex-col items-center gap-[4dvh] transition-all sm:gap-[6dvh] lg:gap-[9dvh]">
            <div className="flex w-full flex-col gap-2">
              <div className="flex w-full flex-col">
                <label className="text-2xl font-semibold text-sky-800">
                  שם משתמש
                </label>
                <input
                  className="h-7 w-full lg:h-9"
                  type="text"
                  name="text"
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
            <div className="flex w-full flex-col items-center gap-2">
              <div className="flex w-full flex-col">
                <label className="text-2xl font-semibold text-sky-800">
                  סיסמה
                </label>
                <input
                  className="h-7 w-full lg:h-9"
                  type="password"
                  name="password"
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
