// import axios from "axios";
// import { useState } from "react";
// import toast from "react-hot-toast";

// export default function TaskForm({ refresh }) {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     if (!title.trim()) return toast.error("Title is required!");

//     await axios.post("http://localhost:5000/api/tasks", {
//       title,
//       description,
//       status: "pending",
//     });

//     setTitle("");
//     setDescription("");
//     refresh();
//     toast.success("Task added!");
//   };

//   return (
//     <form
//       onSubmit={submitHandler}
//       className="bg-white p-6 rounded-xl shadow max-w-md mx-auto w-full flex flex-col gap-3"
//     >
//       <h2 className="text-xl font-semibold text-gray-800">Add New Task</h2>

//       <input
//         type="text"
//         placeholder="Task Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//         required
//       />

//       <textarea
//         rows="4"
//         placeholder="Task Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />

//       <button className="bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
//         Add Task
//       </button>
//     </form>
//   );
// }





import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export default function TaskForm({ refresh, isModal = false }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!title.trim()) return toast.error("Title is required!");

    await axios.post("http://localhost:5000/api/tasks", {
      title,
      description,
      status: "pending",
    });

    setTitle("");
    setDescription("");
    refresh();
    toast.success("Task added!");
  };

  return (
    <form
      onSubmit={submitHandler}
      className={`bg-white p-4 rounded shadow max-w-md w-full mx-auto ${
        isModal ? "max-h-[70vh] overflow-y-auto" : ""
      }`}
    >
        <h1 className="text-center py-2 mb-4 font-bold">Add New Task</h1>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full mb-2 rounded"
        required
      />

      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={4}
        className="border p-2 w-full mb-3 rounded resize-none"
      />

      <button className="bg-blue-500 cursor-pointer text-white w-full py-2 rounded hover:bg-blue-600 transition-colors">
        {isModal ? "Add" : "Add"}
      </button>
    </form>
  );
}
