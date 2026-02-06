import { motion } from "framer-motion";

export default function EditModal({ task, onClose, onSave }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-2"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className="bg-white p-6 rounded-xl shadow w-full max-w-md"
      >
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Edit Task</h2>
        <input
          value={task.title}
          onChange={(e) => onSave({ ...task, title: e.target.value })}
          className="border p-3 rounded-lg w-full mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          value={task.description}
          onChange={(e) => onSave({ ...task, description: e.target.value })}
          className="border p-3 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
        />
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(task, true)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Save
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
