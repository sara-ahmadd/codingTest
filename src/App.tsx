import { Route, Routes } from "react-router-dom";
import Employees from "./components/Employees";
import SideBar from "./components/SideBar";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./components/NotFound";
import NewEmployeeContext from "./contexts/NewEmployeeContext";
import EmployeeContextProvider from "./contexts/EmployeesContextProvider";
function App() {
  return (
    <EmployeeContextProvider>
      <NewEmployeeContext>
        <div className="row">
          <div className="col-md-1 side-bar">
            <SideBar />
          </div>
          <div className="col-md-11 py-4 d-flex flex-column justify-content-start align-items-center ">
            <div className="h-21 w-100 d-block ms-auto"></div>
            <div className="w-100">
              <Routes>
                <Route path="/employees" element={<Employees />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </div>
      </NewEmployeeContext>
    </EmployeeContextProvider>
  );
}

export default App;
