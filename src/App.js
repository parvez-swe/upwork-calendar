import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import Calender from "./pages/Calender/Calender";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className=" pl-[5vw]  pt-[8vh]">
        <Routes>
          <Route path="/" element={<Calender />} />
          <Route path="/calender" element={<Calender />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
