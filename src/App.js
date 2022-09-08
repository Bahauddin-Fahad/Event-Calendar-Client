import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Months from "./Pages/Months";
import Days from "./Pages/Days";
import Events from "./Pages/Events";
import NotFound from "./Pages/NotFound";
import Years from "./Pages/Years";
import Json from "./Pages/Json";

AOS.init();

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Years />} />
        <Route path="/:year/months" element={<Months />} />
        <Route path="/:year/:monthName" element={<Days />} />
        <Route path="/day/:date" element={<Events />} />
        <Route path="/notFound" element={<NotFound />} />
        <Route path="/json" element={<Json />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
