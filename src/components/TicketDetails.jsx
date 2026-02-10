import { FaRegEye } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
export default function TicketDetails() {
  return (
    <div className="flex-1 bg-white pt-3 overflow-y-auto hide-scrollbar">
      
      {/*  HEADER  */}
      
<div className="border-b border-gray-400 px-6 pb-3 mb-4 flex items-start justify-between">
  <div className="flex items-start gap-3">

    <div>
      <h2 className="font-semibold text-lg">
        Laudantium neque veritatis
      </h2>
      <p className="text-xs text-gray-500 mt-1">
        OPS-102 (100669518) | Created 11/14/22 12:32 PST
      </p>
    </div>
  </div>

  {/* Right icons */}
  <div className="flex items-center  text-md gap-2 mt-6">
    <div className="flex gap-2">
      <MdOutlineMail />
      <FaRegEye />
    </div>
    
   
    <div className="flex -space-x-2">
      <img src="https://i.pravatar.cc/24?1" className="w-6 h-6 rounded-full border" />
      <img src="https://i.pravatar.cc/24?2" className="w-6 h-6 rounded-full border" />
    </div>
  </div>
</div>


      {/*  REPLY CARD  */}
      <div className="mx-6 mb-6 bg-white rounded-xl shadow-[0_3px_28px_rgba(0,0,0,0.12)]">
        
        <div className="flex gap-6 px-4 pt-4 text-sm border-b border-gray-400">
          <button className="pb-2 font-semibold border-b-2 border-blue-600 text-blue-600">
            Public Reply
          </button>
          <button className="pb-2 text-gray-400">
            Private Comment
          </button>
        </div>

        {/* To Row */}
        <div className="flex items-center gap-2 px-4 py-3 text-sm border-b border-gray-400">
          <span className="text-gray-500">To:</span>

          <div className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-full text-xs">
            <img
              src="https://i.pravatar.cc/24"
              alt=""
              className="w-5 h-5 rounded-full"
            />
            <span>
              Allison Westervelt &lt;awestervelt@email.com&gt;
            </span>
            <span className="cursor-pointer text-gray-400">✕</span>
          </div>

          <span className="ml-auto text-xs text-gray-400 cursor-pointer">
            Cc
          </span>
        </div>

        {/* Textarea */}
        <textarea
          className="w-full min-h-[120px] px-4 py-3 text-sm outline-none resize-none"
          placeholder="Add a reply..."
        />

        {/* Toolbar */}
        <div className="flex items-center justify-between px-4 py-2 border-t border-gray-400 text-xs text-gray-700">
          <div className="flex gap-4 text-xl">
            <span className="font-semibold">B</span>
            <span className="italic">i</span>
            <span className="underline">U</span>
            <span>📎</span>
            <span>🔗</span>
          </div>

          <div className="flex items-center gap-2">
            <span>Add to KB</span>
            <input type="checkbox" />
          </div>
        </div>
      </div>

      {/*  MESSAGE CARD  */}
      <div className="mx-6 mb-4 bg-white rounded-xl  shadow-[0_3px_28px_rgba(0,0,0,0.12)] p-4 text-sm">
        <div className="flex items-start gap-3">
          <img
            src="https://i.pravatar.cc/40"
            alt=""
            className="w-9 h-9 rounded-full"
          />

          <div className="flex-1">
            <div className="flex justify-between">
              <div>
                <p className="font-semibold">Allie Harmon</p>
                <p className="text-xs text-gray-700">
                  To Danny Amacher &lt;danny@capacity.com&gt;
                </p>
              </div>

              <p className="text-xs text-gray-600">
                Feb 9, 2022 · 10:31 AM
              </p>
            </div>

            <p className="mt-2 text-gray-900">
              Ex beatae aliquid mollitia. Enim doloremque molestiae voluptatem
              voluptatum recusandae. Maxime beatae nostrum ut. Deserunt totam autbnihil quo beatae. Quas non delectus paraesentium est illum vitae nemo iure.
            </p>

            {/* Attachments */}
            <div className="flex gap-3 mt-3">
              <div className="border rounded-lg px-3 py-2 text-xs bg-white">
                Screen_shot.png <br />
                <span className="text-gray-500">16 Jun 2022, 1:30 PM</span>
              </div>

              <div className="border rounded-lg px-3 py-2 text-xs bg-white">
                Screen_shot.png <br />
                <span className="text-gray-500">16 Jun 2022, 1:30 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  SECOND MESSAGE  */}
      <div className="mx-6 mb-6 bg-white rounded-xl  shadow-[0_3px_28px_rgba(0,0,0,0.12)] p-4 text-sm">
        <div className="flex items-start gap-3">
          <img
            src="https://i.pravatar.cc/40"
            alt=""
            className="w-9 h-9 rounded-full"
          />

          <div className="flex-1">
            <div className="flex justify-between">
              <p className="font-semibold">Allie Harmon</p>
              <p className="text-xs text-gray-600">
                Feb 9, 2022 · 10:31 AM
              </p>
            </div>
             <p className="text-xs text-gray-700">
                  To Danny Amacher &lt;danny@capacity.com&gt;
                </p>
            <p className="mt-2 text-gray-900">
              Dolorem similique et aliquid illum dolor. Vel quo magnam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
