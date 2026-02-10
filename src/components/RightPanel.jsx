export default function RightPanel() {
  return (
    <div className="w-72 bg-white border-l border-gray-400 py-5 text-sm rounded-tr-3xl overflow-y-auto hide-scrollbar">

      {/* TOP STATUS BAR */}
      <div className="flex border-b border-gray-400 items-center justify-between mb-4 pb-6 pr-4">
        <button className="flex items-center gap-2 bg-blue-600 text-white text-xs ml-4 px-3 py-1.5 rounded-md">
          To Do
          <span className="text-[10px]">▼</span>
        </button>

        <button className="text-gray-400 hover:text-gray-600">
          ✕
        </button>
        
      </div>
      

      {/* Priority */}
      <div className="mb-4 px-4">
        <label className="block text-xs  mb-1 font-semibold">Priority</label>
        <select className="w-full border rounded-lg px-3 py-2 text-sm">
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>

      {/* Assigned To */}
      <div className="mb-4 px-4">
        <div className="flex justify-between items-center mb-1 font-semibold">
          <label className="text-xs ">Assigned To</label>
          <span className="text-xs text-blue-600 cursor-pointer ">
            Assign to me
          </span>
        </div>

        <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
          <img
            src="https://i.pravatar.cc/24"
            alt=""
            className="w-6 h-6 rounded-full"
          />
          <span>Allie Harmon</span>
        </div>
      </div>

      {/* Project */}
      <div className="mb-4 px-4">
        <label className="block text-xs  mb-1 font-semibold">Project</label>
        <select className="w-full border rounded-lg px-3 py-2 text-sm">
          <option>Administrative</option>
        </select>
      </div>

      {/* Ticket Type */}
      <div className="mb-4 px-4">
        <label className="block text-xs  mb-1 font-semibold">Ticket Type</label>
        <select className="w-full border rounded-lg px-3 py-2 text-sm">
          <option>Task</option>
        </select>
      </div>

      {/* Due Date */}
      <div className="mb-4 px-4">
        <label className="block text-xs  mb-1 font-semibold">Due Date</label>
        <input
          type="date"
          className="w-full border rounded-lg px-3 py-2 text-sm"
        />
      </div>

      {/* Reporter */}
      <div className="mb-4 px-4">
        <label className="block text-xs  mb-1 font-semibold">Reporter</label>
        <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
          <img
            src="https://i.pravatar.cc/24?img=3"
            alt=""
            className="w-6 h-6 rounded-full"
          />
          <span>Allie Harmon</span>
        </div>
      </div>

      {/* Tags */}
      <div className="mb-4 px-4">
        <label className="block text-md font-semibold  mb-1">Tags</label>
        <button className="text-blue-600 text-sm">
          + Add Tag
        </button>
      </div>

      {/* Collapsible sections */}
      <div className="border-t pt-3 space-y-2 text-l font-semibold">
        <div className="flex justify-between cursor-pointer border-b border-gray-400 py-2 px-4">
          <span>TASKS</span>
          <span>{">"}</span>
        </div>

        <div className="flex justify-between cursor-pointer border-b border-gray-400 py-2 px-4">
          <span>COLLECTED FIELDS</span>
          <span>{">"}</span>
        </div>

        <div className="flex justify-between cursor-pointer border-b border-gray-400 py-2 px-4">
          <span>LINKED TICKETS</span>
          <span className="bg-gray-200 px-2 rounded-full text-xs">2</span>
        </div>

        <div className="flex justify-between cursor-pointer border-b border-gray-400 py-2 px-4">
          <span>HISTORY</span>
          <span>{">"}</span>
        </div>
      </div>
    </div>
  );
}
