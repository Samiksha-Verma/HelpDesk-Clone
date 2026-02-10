export default function CreateKnowledgeDrawer({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-end z-50">
      <div className="w-[420px] bg-white h-full px-5 py-4 overflow-y-auto text-sm">

        {/*  BACK  */}
        <button
          onClick={onClose}
          className="flex items-center gap-1 text-blue-600 text-sm mb-4"
        >
          ← Back
        </button>

        {/*  TITLE */}
        <h2 className="font-semibold mb-6">Create New Knowledge</h2>

        {/*  NEW INQUIRY */}
        <label className="text-xs font-medium text-gray-600 mb-1 block">
          New Inquiry <span className="text-red-500">*</span>
        </label>

        <div className="border rounded-lg p-3 mb-5 bg-white">
          <p className="text-gray-500 text-xs mb-2">
            This is populated automatically with ticket inquiry
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src="https://i.pravatar.cc/32"
                className="w-7 h-7 rounded-full"
                alt=""
              />
            </div>

            <div className="flex gap-3 text-gray-400 text-sm">
              <span>📋</span>
              <span>🗑️</span>
            </div>
          </div>
        </div>

        {/*  NEW RESPONSE  */}
        <label className="text-xs font-medium text-gray-600 mb-1 block">
          New Response <span className="text-red-500">*</span>
        </label>

        <div className="border rounded-lg p-3 mb-2 bg-white">
          <textarea
            placeholder="Add a response..."
            className="w-full outline-none resize-none text-sm"
            rows={3}
          />

          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-2">
              <img
                src="https://i.pravatar.cc/32?img=2"
                className="w-7 h-7 rounded-full"
                alt=""
              />
            </div>

            <div className="flex gap-3 text-gray-400 text-sm">
              <span>📋</span>
              <span>🗑️</span>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-400 mb-5">
          Tip: Capacity works best with answers that are short and specific.
        </p>

        {/*  SAVE TO */}
        <label className="text-xs font-medium text-gray-600 mb-1 block">
          Save To <span className="text-red-500">*</span>
        </label>
        <select className="w-full border rounded-lg px-3 py-2 mb-5 text-sm">
          <option>Choose a dialogue...</option>
        </select>

        {/*  EXPIRATION  */}
        <label className="text-xs font-medium text-gray-600 mb-1 block">
          Expiration
        </label>
        <input
          type="date"
          className="w-full border rounded-lg px-3 py-2 mb-5 text-sm"
        />

        {/*  AUTOCOMPLETE  */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm text-gray-600">Autocomplete</span>
          <div className="w-10 h-5 bg-green-500 rounded-full relative">
            <div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5"></div>
          </div>
        </div>

        {/*  BUTTONS */}
        <div className="flex gap-3">
          <button className="flex-1 bg-gray-100 text-gray-500 py-2 rounded-lg text-sm">
            Save to KB
          </button>
          <button className="flex-1 border border-blue-600 text-blue-600 py-2 rounded-lg text-sm">
            Save Local Draft
          </button>
        </div>
      </div>
    </div>
  );
}
