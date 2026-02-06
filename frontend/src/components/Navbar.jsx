// export default function Navbar({ activeTab, setActiveTab }) {
//   return (
//     <div className="h-16 bg-blue-600 text-white flex items-center justify-between px-4 md:px-6 fixed top-0 w-full z-50">
//       <h1 className="font-bold text-lg md:text-xl">📝 Task Manager</h1>

//       <div className="flex gap-2 md:gap-4">
//         <button
//           onClick={() => setActiveTab("pending")}
//           className={`px-3 md:px-4 py-1 rounded text-sm md:text-base ${
//             activeTab === "pending" ? "bg-white text-blue-600" : ""
//           }`}
//         >
//           Pending
//         </button>
//         <button
//           onClick={() => setActiveTab("completed")}
//           className={`px-3 md:px-4 py-1 rounded text-sm md:text-base ${
//             activeTab === "completed" ? "bg-white text-blue-600" : ""
//           }`}
//         >
//           Completed
//         </button>
//       </div>
//     </div>
//   );
// }




import { useState } from "react";


export default function Navbar({ activeTab, setActiveTab, onMobileAdd }) {
  return (
    <div className="h-16 bg-blue-600 text-white flex items-center justify-between px-4 md:px-6 fixed top-0 w-full z-50">
      <h1 className="font-bold text-lg md:text-xl">{"<📝TM/>"}</h1>

      <div className="flex gap-2 md:gap-4 items-center">
        <button
          onClick={() => setActiveTab("pending")}
          className={`px-3 cursor-pointer md:px-4 py-1 rounded text-sm md:text-base ${
            activeTab === "pending" ? "bg-white text-blue-600" : ""
          }`}
        >
          Pending
        </button>
        <button
          onClick={() => setActiveTab("completed")}
          className={`px-3 cursor-pointer md:px-4 py-1 rounded text-sm md:text-base ${
            activeTab === "completed" ? "bg-white text-blue-600" : ""
          }`}
        >
          Completed
        </button>

        {/* Mobile only Add Task Button */}
        <button
          onClick={onMobileAdd}
          className="md:hidden flex items-center gap-1 bg-white text-blue-600 px-3 py-1 rounded shadow hover:bg-gray-100 cursor-pointer"
        >
           Add
        </button>
      </div>
    </div>
  );
}
