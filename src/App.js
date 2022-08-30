import { Routes, Route } from "react-router-dom";
import "./App.css";
import Days from "./Pages/Days";
import Events from "./Pages/Events";
import Months from "./Pages/Months";

function App() {
  return (
    <div className="App bg-gray-800">
      <Routes>
        <Route path="/" element={<Months />} />
        <Route path="/month/:monthName" element={<Days />} />
        <Route path="/:monthName/:dayId" element={<Events />} />
      </Routes>
    </div>
  );
}

export default App;
