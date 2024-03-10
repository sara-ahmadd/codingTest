import { Route, Routes } from "react-router-dom";
import Employees from "./components/Employees";
import SideBar from "./components/SideBar";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./components/NotFound";
function App() {
  return (
    <div className=" container min-vh-100 min-vw-100">
      <div className="row vh-100">
        <div className="col-md-1 side-bar">
          <SideBar />
        </div>
        <div className="col-md-11 py-4 d-flex flex-column justify-content-start align-items-center ">
          <div className="h-21 w-100"></div>
          <div className="w-100">
            <Routes>
              <Route path="/employees" element={<Employees />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
