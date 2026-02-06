import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";


export default function Home({
  activeTab,
  taskListRef,
  showMobileForm,
  setShowMobileForm,
}) {
  return (
    <>
      {/* Main Layout */}
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden pt-16">
        {/* LEFT - Task Form (Desktop) */}
        <div className="hidden md:block md:w-1/3 p-4 border-r border-gray-300 bg-gray-50 overflow-auto">
          <TaskForm refresh={() => taskListRef.current?.fetchTasks()} />
        </div>

        {/* RIGHT - Task List */}
        <div className="w-full md:w-2/3 p-4 overflow-y-auto">
          <TaskList ref={taskListRef} activeTab={activeTab} />
        </div>
      </div>

      {/* Mobile Add Task Modal */}
      {showMobileForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
            <h2 className="text-lg font-semibold mb-3">Add New Task</h2>

            <TaskForm
              refresh={() => {
                taskListRef.current?.fetchTasks();
                setShowMobileForm(false);
              }}
              isModal={true}
            />

            <button
              onClick={() => setShowMobileForm(false)}
              className="mt-4 w-full py-2 rounded bg-gray-300 text-gray-700 hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
