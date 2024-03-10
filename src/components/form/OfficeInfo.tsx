import React from "react";
import { Employee } from "../../../interfaces";

const OfficeInfo = ({
  employeeForm,
  setEmployeeForm,
}: {
  employeeForm: Employee;
  setEmployeeForm: (form: Employee) => void;
}) => {
  return (
    <>
      <h3 className="form-title">Office Info</h3>
      <div className="col-md-12">
        <div className="mb-1">
          <label htmlFor="Office" className="form-label fs-small-13">
            Office
          </label>
          <select
            value={employeeForm.office}
            onChange={(e) =>
              setEmployeeForm({
                ...employeeForm,
                office: e.target.value,
              })
            }
            className="form-select fs-small-13 shadow-none"
            id="inputGroupSelect02"
          >
            <option value="" className=" text-muted ">
              Select an option
            </option>
            <option value="Arabic Localizer">One</option>
            <option value="Arabic Localizer">Two</option>
            <option value="Arabic Localizer">Three</option>
          </select>
        </div>
      </div>
      <div className="col-md-12 d-flex justify-content-start gap-5 gap-2 align-items-start ">
        <div className="col-md-5">
          <div className="mb-1">
            <label htmlFor="name" className="form-label fs-small-13 mb-0">
              Department
            </label>
            <select
              value={employeeForm.department}
              onChange={(e) =>
                setEmployeeForm({
                  ...employeeForm,
                  department: e.target.value,
                })
              }
              className="form-select fs-small-13 shadow-none"
              id="inputGroupSelect02"
            >
              <option value="" className=" text-muted ">
                Select an option
              </option>
              <option value="Business Development">One</option>
              <option value="Business Development">Two</option>
              <option value="Business Development">Three</option>
            </select>
          </div>
          <div className="mb-1">
            <label htmlFor="name" className="form-label fs-small-13 mb-0">
              Role
            </label>
            <select
              value={employeeForm.role}
              onChange={(e) =>
                setEmployeeForm({
                  ...employeeForm,
                  role: e.target.value,
                })
              }
              className="form-select fs-small-13 shadow-none"
              id="inputGroupSelect02"
            >
              <option value="" className=" text-muted ">
                Select an option
              </option>
              <option value="Employee">One</option>
              <option value="Employee">Two</option>
              <option value="Employee">Three</option>
            </select>
          </div>
          <div className="mb-1">
            <label htmlFor="name" className="form-label fs-small-13 mb-0">
              Direct Manager
            </label>
            <select
              value={employeeForm.directManager}
              onChange={(e) =>
                setEmployeeForm({
                  ...employeeForm,
                  directManager: e.target.value,
                })
              }
              className="form-select fs-small-13 shadow-none"
              id="inputGroupSelect02"
            >
              <option value="" className=" text-muted ">
                Select an option
              </option>
              <option value="Mohamed Tarek">One</option>
              <option value="Mohamed Tarek">Two</option>
              <option value="Mohamed Tarek">Three</option>
            </select>
          </div>
        </div>
        <div className="col-md-5">
          <div className="mb-1">
            <label htmlFor="name" className="form-label fs-small-13 mb-0">
              Attendence Profile
            </label>
            <select
              value={employeeForm.attendenceProfile}
              onChange={(e) =>
                setEmployeeForm({
                  ...employeeForm,
                  attendenceProfile: e.target.value,
                })
              }
              className="form-select fs-small-13 shadow-none"
              id="inputGroupSelect02"
            >
              <option value="" className=" text-muted ">
                Select an option
              </option>
              <option value="Present">One</option>
              <option value="Weekend">Two</option>
              <option value="Absent">Three</option>
              <option value="OnLeave">Three</option>
              <option value="Holiday">Three</option>
            </select>
          </div>
          <div className="mb-1">
            <label htmlFor="name" className="form-label fs-small-13 mb-0">
              Position
            </label>
            <select
              value={employeeForm.position}
              onChange={(e) =>
                setEmployeeForm({
                  ...employeeForm,
                  position: e.target.value,
                })
              }
              className="form-select fs-small-13 shadow-none"
              id="inputGroupSelect02"
            >
              <option value="" className=" text-muted ">
                Select an option
              </option>
              <option value="HR Head">One</option>
              <option value="HR Head">Two</option>
              <option value="HR Head">Three</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfficeInfo;
