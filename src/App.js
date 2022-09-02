import { Routes, Route } from "react-router-dom";
import "./App.css";
import Months from "./Pages/Months";
import Days from "./Pages/Days";
import Events from "./Pages/Events";

function App() {
  return (
    <div className="App bg-slate-600 p-10">
      <Routes>
        <Route path="/" element={<Months />} />
        <Route path="/:monthName" element={<Days />} />
        <Route path="/day/:date" element={<Events />} />
      </Routes>
    </div>
  );
}

export default App;
