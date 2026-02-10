import {
  FiMessageSquare,
  FiGrid,
} from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Sidebar() {
  return (
    <div className="w-54 bg-[#08325f] text-white h-screen flex ">
      
      {/* TEXT MENU */}
      <div className="flex-1 px-4 py-4 text-sm  bg-gray-200 text-black rounded-tl-3xl overflow-hidden ">
        <p className=" flex text-md font-bold  mb-3 p-2 bg-gray-300 rounded"><span className="text-xl mr-2"><RiArrowDropDownLine /></span>TICKET VIEWS</p>

        <MenuItem  label="My Tickets" count={9} active />
        <MenuItem  label="Past Due" count={4} />
        <MenuItem  label="High Priority" count={11} />
        <MenuItem  label="Unassigned" count={98} />
        <MenuItem  label="All Tickets" count="2,192" />

        
        <MenuItem icon={<FiMessageSquare />} label="Live Chats" />
        <MenuItem icon={<FiGrid />} label="Boards" />
      </div>
    </div>
  );
}

function MenuItem({ icon, label, count, active }) {
  return (
    <div
      className={`flex items-center justify-between px-3 py-2 rounded cursor-pointer ${
        active ? "bg-blue-600" : "hover:bg-blue-700"
      }`}
    >
      <div className="flex items-center gap-2">
        {icon}
        <span>{label}</span>
      </div>
      {count && (
        <span className="text-xs bg-white px-2 py-0.5 rounded-full">
          {count}
        </span>
      )}
    </div>
  );
}

