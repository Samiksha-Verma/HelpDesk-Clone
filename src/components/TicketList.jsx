import { tickets } from "../data/ticket";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { FaAngleDown } from "react-icons/fa";

export default function TicketList() {
  return (
    <div className="w-80 bg-white border-r border-gray-400 overflow-y-auto hide-scrollbar">
      
      {/* Header */}
      <h3 className="flex gap-4 font-semibold mb-6 mt-4 pl-4 pb-2 items-center">
        <span className="text-2xl font-bold">
          <HiBars3BottomLeft />
        </span>
        My Tickets
        <FaAngleDown className="mt-1.5" />
      </h3>

      <hr className="border-gray-400" />

      {/* Search */}
      <div className="px-4 pt-2 pb-4 border-b">
        <input
          className="mt-2 w-full border rounded px-3 py-1 text-sm"
          placeholder="Search tickets"
        />
      </div>

      {/* Tickets */}
      {tickets.map((t, i) => (
        <div
          key={i}
          className={`px-4 py-3 border-b cursor-pointer ${
            i === 1
              ? "bg-blue-50 border-l-4 border-blue-600"
              : "hover:bg-slate-50"
          }`}
        >
          {/* ROW 1: Title + Date */}
          <div className="flex justify-between items-start">
            <p className="text-sm font-medium leading-snug">
              {t.title}
            </p>
            <span className="text-xs text-gray-400 whitespace-nowrap">
              {t.date}
            </span>
          </div>

          {/* ROW 2: ID + Status */}
          <div className="flex justify-between items-center mt-3">
            
            {/* Left */}
            <div className="flex items-center gap-4">
              <input type="checkbox" />
              <p className="text-xs text-gray-500">{t.id}</p>
            </div>

            {/* Right */}
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs">
                {t.status}
              </span>

              <div className="flex -space-x-1">
                <img
                  src="https://i.pravatar.cc/24?img=1"
                  alt=""
                  className="w-5 h-5 rounded-full border border-white"
                />
                <img
                  src="https://i.pravatar.cc/24?img=2"
                  alt=""
                  className="w-5 h-5 rounded-full border border-white"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
