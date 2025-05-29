import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Vtubers from "./pages/Vtubers";
import Vmusics from "./pages/Vmusics";
import Community from "./pages/Community";
import Announcements from "./pages/Announcements";


function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <main className="ml-56 flex-grow p-6 bg-gray-900 text-white min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vtubers" element={<Vtubers />} />
            <Route path="/vmusics" element={<Vmusics />} />
            <Route path="/community" element={<Community />} />
            <Route path="/announcements" element={<Announcements />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default App;
