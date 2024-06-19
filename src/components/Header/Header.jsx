import { useSelector } from "react-redux";
import { IoIosSettings } from "react-icons/io";

const Header = () => {
  const username = useSelector((state) => state.user.username);

  return (
    <header className="m-8 flex items-center">
      <div className="w-[32dvh]">
        <input
          type="search"
          class="h-12 w-[32dvh] rounded-full border border-sky-500 bg-gray-50 ps-4 text-lg text-sky-600 focus:border-sky-500 focus:ring-sky-500"
          placeholder="חפש משתמש..."
          required
        />
      </div>

      <div className="flex w-full justify-end gap-5">
        <button className="rounded-full border border-sky-300 bg-slate-50 p-2 text-4xl">
          <IoIosSettings />
        </button>
        <div className="flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1">
          <span className="h-7 px-1 text-xl">{username || "none"}</span>
          <img className="h-6 w-6" src="/user-icon.png" alt="user-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
