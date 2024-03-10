import { FaExclamation } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoPauseCircleOutline } from "react-icons/io5";
import { IoTrash } from "react-icons/io5";
import "./employee.css";
import { useContext, useState } from "react";
import { Employee } from "../../../interfaces";
import { EmployeesContext } from "../../contexts/EmployeesContextProvider";
import AddNewBtn from "../AddNewBtn";
const EmployeeCard = ({ employee }: { employee: Employee }) => {
  const [card, setCard] = useState(false);
  const handleCard = () => {
    setCard(!card);
  };
  const { updateEmployees } = useContext(EmployeesContext);
  return (
    <div className="w-100 h-100 employee-card">
      <div className="h-100 d-flex flex-column justify-content-center gap-3 align-items-start ">
        <img
          src={"public/images/freshCart.jpg"}
          alt=""
          width={64}
          height={64}
          className=" rounded-circle"
        />

        <div className=" d-flex justify-content-between align-items-center w-100">
          <AddNewBtn page="card" />
          <span className="icons-under-employee-img">
            <IoPauseCircleOutline />
          </span>
          <span
            className="icons-under-employee-img"
            onClick={() => updateEmployees(employee)}
          >
            <IoTrash />
          </span>
        </div>
      </div>
      <div className="p-2 d-flex flex-column justify-content-center align-items-start gap-1">
        <p className="fs-small-20 text-capitalize">{employee.name}</p>
        <p className="fs-small-13 text-capitalize">{employee.position}</p>
        <p className="fs-small-10 text-capitalize">{employee.department}</p>
        <div className=" d-flex justify-content-between align-items-center w-100">
          <p
            className={`fs-small-11   badge-w-h d-flex justify-content-center align-items-center text-capitalize ${
              employee.attendenceProfile === "Weekend"
                ? "weekend"
                : employee.attendenceProfile === "Present"
                ? "present"
                : employee.attendenceProfile === "Absent"
                ? "absent"
                : employee.attendenceProfile === "OnLeave"
                ? "onleave"
                : "holiday"
            }`}
          >
            {employee.attendenceProfile}
          </p>
          <div className="icons d-flex justify-content-between align-items-center">
            <span className="rounded-circle p-2">
              <FaPhoneAlt />
            </span>
            <span className="rounded-circle p-2">
              <IoMail />
            </span>
            <span
              className="rounded-circle p-2 position-relative"
              onClick={handleCard}
            >
              <FaExclamation />
              {card && (
                <>
                  <div className="infoCard  row p-3 h">
                    <div className="col-md-4 ">
                      <h4 className="fs-small-8">Office</h4>
                      <span className="fs-small-8">{employee.office}</span>
                    </div>
                    <div className="col-md-4">
                      <h4 className="fs-small-8">Role</h4>
                      <span className="fs-small-8">{employee.role}</span>
                    </div>
                    <div className="col-md-4">
                      <h4 className="fs-small-8">Direct Manager</h4>
                      <span className="fs-small-8">
                        {employee.directManager}
                      </span>
                    </div>
                    <div className="col-md-4">
                      <h4 className="fs-small-8">Joining Date</h4>
                      <span className="fs-small-8">{employee.startDate}</span>
                    </div>
                    <div className="col-md-4">
                      <h4 className="fs-small-8">Manager</h4>
                      <span className="fs-small-8">
                        {employee.directManager}
                      </span>
                    </div>
                  </div>
                  <div className="infoArrow"></div>
                </>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
