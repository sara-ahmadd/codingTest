import React from "react";
import { Employee } from "../../../interfaces";

const PersonalInfo = ({
  employeeForm,
  setEmployeeForm,
}: {
  employeeForm: Employee;
  setEmployeeForm: (form: Employee) => void;
}) => {
  return (
    <>
      <div className="col-md-4">
        <div className="mb-1">
          <label htmlFor="name" className="form-label fs-small-13 mb-0">
            Name
          </label>
          <input
            required
            type="text"
            value={employeeForm.name}
            onChange={(e) =>
              setEmployeeForm({
                ...employeeForm,
                name: e.target.value,
              })
            }
            className="form-control fs-small-13 shadow-none "
            id="name"
            placeholder="name"
          />
        </div>
        <div className="mb-1">
          <label htmlFor="phone" className="form-label fs-small-13">
            Phone
          </label>
          <input
            required
            value={employeeForm.phone}
            onChange={(e) =>
              setEmployeeForm({
                ...employeeForm,
                phone: e.target.value,
              })
            }
            type="tel"
            className="form-control fs-small-13 shadow-none"
            id="phone"
            placeholder="phone"
          />
        </div>
      </div>
      <div className="col-md-4">
        <div className="mb-1">
          <label htmlFor="Start Date" className="form-label fs-small-13">
            Start Date
          </label>
          <input
            required
            value={employeeForm.startDate}
            onChange={(e) =>
              setEmployeeForm({
                ...employeeForm,
                startDate: e.target.value,
              })
            }
            type="date"
            className="form-control fs-small-13 shadow-none"
            id="Start Date"
            placeholder="m/d/y"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label fs-small-13"
          >
            Email
          </label>
          <input
            required
            value={employeeForm.email}
            onChange={(e) =>
              setEmployeeForm({
                ...employeeForm,
                email: e.target.value,
              })
            }
            type="email"
            className="form-control fs-small-13 shadow-none"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
