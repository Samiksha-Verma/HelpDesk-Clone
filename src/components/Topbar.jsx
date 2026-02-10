import { FaSearch, FaBell, FaQuestionCircle } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";

export default function Topbar({ onCreate }) {
  return (
    <div className="flex items-center justify-between bg-[#08325f] px-6 py-3 text-white rounded-tr-2xl">
      
      {/* LEFT: Title */}
      <div className="font-semibold text-xl">
        Helpdesk
      </div>

      {/* CENTER: Search */}
      <div className="relative w-[420px]">
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
        <input
          className="w-full pl-9 pr-3 py-2 rounded bg-[#0a1948] text-sm text-white outline-none placeholder-gray-400"
          placeholder="Search Capacity..."
        />
      </div>

      {/* RIGHT: Actions */}
      <div className="flex items-center gap-4">
        
        {/* Create Button */}
        <button
          onClick={onCreate}
          className="flex items-center gap-1 bg-sky-500 hover:bg-sky-600 px-4 py-2 rounded text-sm font-semibold"
        >
          Create
          <HiChevronDown className="text-sm" />
        </button>

        {/* Icons */}
        <FaQuestionCircle className="cursor-pointer text-lg opacity-80 hover:opacity-100" />
        <FaBell className="cursor-pointer text-lg opacity-80 hover:opacity-100" />

        {/* Profile */}
        <img
          src="https://i.pravatar.cc/32"
          alt="profile"
          className="w-8 h-8 rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
}
