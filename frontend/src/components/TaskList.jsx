import axios from "axios";
import { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import TaskCard from "./TaskCard";
import BASE_URL from "../api/api";

const TaskList = forwardRef(({ activeTab }, ref) => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await axios.get(`${BASE_URL}/api/tasks`);
    setTasks(res.data);
  };

  useImperativeHandle(ref, () => ({
    fetchTasks,
  }));

  useEffect(() => {
    fetchTasks();
  }, []);

  const filteredTasks = tasks.filter((task) => task.status === activeTab);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredTasks.map((task) => (
        <TaskCard key={task._id} task={task} refresh={fetchTasks} />
      ))}
    </div>
  );
});

export default TaskList;
