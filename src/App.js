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
AOS.init();

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Months />} />
        <Route path="/:monthName" element={<Days />} />
        <Route path="/day/:date" element={<Events />} />
        <Route path="/notFound" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
