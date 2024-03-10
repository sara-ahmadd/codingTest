import { HiMiniMagnifyingGlass } from "react-icons/hi2";

import EmployeeCard from "./EmployeeCard";
import AddNewBtn from "./AddNewBtn";

const Employees = () => {
  return (
    <section className="bg-employee-section">
      <div className="mb-3 position-relative d-flex justify-content-between align-items-center w-100">
        <HiMiniMagnifyingGlass
          size={11}
          className="text-light-blue-color position-absolute search-icon"
        />
        <input
          type="text"
          className="form-control pleft-10px fs-small-13 border border-primary-subtle shadow-none w-85"
          id="exampleFormControlInput1"
          placeholder="Search"
        />

        <AddNewBtn />
      </div>

      <EmployeeCard />
    </section>
  );
};

export default Employees;
