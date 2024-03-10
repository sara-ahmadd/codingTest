import { HiMiniMagnifyingGlass } from "react-icons/hi2";

import EmployeeCard from "./employee/EmployeeCard";
import AddNewBtn from "./AddNewBtn";
import { ChangeEvent, useContext, useState } from "react";
import { EmployeesContext } from "../contexts/EmployeesContextProvider";

const Employees = () => {
  const { employees } = useContext(EmployeesContext);
  const [searchItem, setSearchItem] = useState("");
  const [employeesArr, setFilteredEmployeesArr] = useState(employees);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const filteredItems = employeesArr.filter((emp) =>
      emp.name.toLowerCase().includes(searchItem.toLowerCase())
    );

    setFilteredEmployeesArr(filteredItems);
  };

  return (
    <section className="bg-employee-section min-vh-100">
      <form className="row g-3 w-100 p-3 justify-content-center align-items-center  position-relative">
        <div className="col-sm-10 col-md-11  position-relative">
          <HiMiniMagnifyingGlass
            size={11}
            className="text-light-blue-color position-absolute search-icon ms-2"
          />
          <input
            type="text"
            className=" ms-2 w-100 form-control pleft-10px fs-small-13 border border-primary-subtle shadow-none"
            id="exampleFormControlInput1"
            placeholder="Search"
            value={searchItem}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="col-sm-2 col-md-1">
          <AddNewBtn page="employees" />
        </div>
      </form>

      <div className="row p-3">
        {employeesArr &&
          employeesArr.length > 0 &&
          employeesArr.map((employee) => (
            <div className="col-md-3" key={employee.name}>
              <EmployeeCard employee={employee} />
            </div>
          ))}
      </div>
    </section>
  );
};

export default Employees;
