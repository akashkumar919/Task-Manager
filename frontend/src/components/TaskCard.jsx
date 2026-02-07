import axios from "axios";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import toast from "react-hot-toast";
import EditModal from "./EditModal";
import BASE_URL from "../api/api";

export default function TaskCard({ task, refresh }) {
  const [celebrate, setCelebrate] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editTask, setEditTask] = useState(task);
  const [undoTimer, setUndoTimer] = useState(null);

  const toggleStatus = async () => {
    const newStatus = task.status === "pending" ? "completed" : "pending";
    await axios.put(`${BASE_URL}/api/tasks/${task._id}`, {
      ...task,
      status: newStatus,
    });
    if (newStatus === "completed") {
      setCelebrate(true);
      setTimeout(() => setCelebrate(false), 3000);
    }
    refresh();
  };

  const saveEdit = async () => {
    await axios.put(`${BASE_URL}/api/tasks/${editTask._id}`, editTask);
    setShowModal(false);
    refresh();
    toast.success("Task updated!");
  };

  const deleteTask = () => {
    toast(
      (t) => (
        <div className="flex gap-3 items-center">
          <span>Task deleted</span>
          <button
            onClick={() => {
              clearTimeout(undoTimer);
              toast.dismiss(t.id);
              refresh();
            }}
            className="text-blue-600 font-semibold hover:underline"
          >
            Undo
          </button>
        </div>
      ),
      { duration: 5000 }
    );

    const timer = setTimeout(async () => {
      await axios.delete(`${BASE_URL}/api/tasks/${task._id}`);
      refresh();
    }, 5000);

    setUndoTimer(timer);
  };

  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className={`relative p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border flex flex-col bg-white ${
          task.status === "completed" ? "bg-green-50 border-green-200" : "border-gray-200"
        }`}
      >
        {celebrate && <Confetti numberOfPieces={500} recycle={false} />}
        <input
          type="checkbox"
          checked={task.status === "completed"}
          onChange={toggleStatus}
          className="absolute top-4 right-4 w-5 h-5 accent-green-500 cursor-pointer"
        />
        <h3 className="font-bold text-lg text-gray-800 mb-2 break-words line-clamp-2">
          {task.title}
        </h3>
        <p className="text-gray-600 text-sm break-words line-clamp-3 mb-4">
          {task.description || "No description provided."}
        </p>

        <div className="flex justify-end gap-3 border-t pt-3 mt-3">
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium transition-colors cursor-pointer"
          >
            <FaEdit /> Edit
          </button>
          <button
            onClick={deleteTask}
            className="flex items-center gap-1 text-red-500 hover:text-red-700 font-medium transition-colors cursor-pointer"
          >
            <FaTrash /> Delete
          </button>
        </div>
      </motion.div>

      {showModal && (
        <EditModal
          task={editTask}
          onClose={() => setShowModal(false)}
          onSave={(updatedTask, save) => {
            setEditTask(updatedTask);
            if (save) saveEdit();
          }}
        />
      )}
    </>
  );
}
