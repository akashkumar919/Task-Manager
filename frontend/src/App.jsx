import { useState, useRef } from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

export default function App() {
  const [activeTab, setActiveTab] = useState("pending");
  const [showMobileForm, setShowMobileForm] = useState(false);
  const taskListRef = useRef();

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <Toaster position="bottom-center" />
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onMobileAdd={() => setShowMobileForm(true)}
      />

      <Home
        activeTab={activeTab}
        taskListRef={taskListRef}
        showMobileForm={showMobileForm}
        setShowMobileForm={setShowMobileForm}
      />
    </div>
  );
}
