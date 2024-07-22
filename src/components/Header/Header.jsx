import { useSelector } from "react-redux";
import { IoIosSettings } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { fetchWrapper } from "../../utils/fetchWarpper";
import { toast } from "react-toastify";

const Header = () => {
  const usernameSearchRef = useRef();
  const username = useSelector((state) => state.user.username);
  const navigate = useNavigate();

  const handleUserSearch = async (e) => {
    e.preventDefault();
    const usernameSearch = usernameSearchRef.current.value;
    try {
      await fetchWrapper(
        `${process.env.SERVER_URL}/users/${usernameSearch}/info`,
      );
      navigate(`/user/${usernameSearch}`);
    } catch (err) {
      toast.error(`המשתמש שחיפשת אינו קיים במערכת`);
    }

    /* 
    1.Check if there is user with this name.
    2.If there is user with this name - Get his ID
    3.Navigate to /users/{id} and show his information
    4.If there is NO user with this name - do not navigate and toastify something with "No user exists"
    */
  };

  return (
    <header className="flex items-center">
      <div className="w-[32dvh]">
        <form onSubmit={(e) => handleUserSearch(e)}>
          <input
            type="search"
            className="h-12 w-[32dvh] rounded-full border border-sky-500 bg-gray-50 ps-4 text-lg text-sky-600 focus:border-sky-500 focus:ring-sky-500"
            placeholder="חפש משתמש..."
            ref={usernameSearchRef}
            required
          />
        </form>
      </div>

      <div className="flex w-full justify-end gap-5">
        <button className="rounded-full border border-sky-300 bg-slate-50 p-2 text-4xl">
          <IoIosSettings />
        </button>
        <div className="flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1">
          <span className="h- text-xl">{username || "none"}</span>
          <img className="h-6 w-6" src="/user-icon.png" alt="user-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
