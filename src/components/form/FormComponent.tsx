import { Button } from "react-bootstrap";
import "./form.css";
import { useCallback, useContext, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Employee } from "../../../interfaces";
import OfficeInfo from "./OfficeInfo";
import PersonalInfo from "./PersonalInfo";
import { EmployeesContext } from "../../contexts/EmployeesContextProvider";
function FormComponent({
  page,
  setShow,
}: {
  page: string;
  setShow: (state: boolean) => void;
}) {
  const [preview, setPreview] = useState<ArrayBuffer | null | string>();
  const { employees, handleEmpoyeesArray } = useContext(EmployeesContext);
  const [employeeForm, setEmployeeForm] = useState<Employee>({
    name: "",
    email: "",
    startDate: "",
    phone: "",
    office: "",
    position: "",
    department: "",
    role: "",
    directManager: "",
    attendenceProfile: "",
    image: undefined,
    id: "duohlr984e567hdufrgth",
  });
  //drop-zone package
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = new FileReader();
      file.onload = () => {
        setPreview(file.result);
      };
      file.readAsDataURL(acceptedFiles[0]);
      setEmployeeForm({ ...employeeForm, image: acceptedFiles[0] });
    },
    [employeeForm]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (page === "employees") {
      handleEmpoyeesArray(employeeForm);
    }
    console.log(employees);
  };

  return (
    <div className="d-flex flex-column justify-content-between align-items-start">
      <form className="w-100" onSubmit={submitForm}>
        <h3 className="form-title">Personal Info</h3>
        <div className="row g-2 justify-content-between align-items-start position-relative">
          <div {...getRootProps()} className="col-md-3 drag-text">
            <input {...getInputProps()} />
            {isDragActive ? (
              <div className="text-muted">Drop the file here ...</div>
            ) : (
              <div className=" text-muted">drag and drop</div>
            )}
            {preview && (
              <img
                src={preview as string}
                alt=""
                width={150}
                height={130}
                className="position-absolute top-10 start-10"
              />
            )}
          </div>

          <PersonalInfo
            employeeForm={employeeForm}
            setEmployeeForm={setEmployeeForm}
          />
        </div>

        <OfficeInfo
          employeeForm={employeeForm}
          setEmployeeForm={setEmployeeForm}
        />

        <h3 className="form-title ">Work from home</h3>
        <div className="d-flex justify-content-start align-items-center gap-2">
          <input type="checkbox" id="remote" />
          <label
            htmlFor="remote"
            className="fs-small-13 fw-bold text-capitalize"
          >
            Allow the employee to work from home
          </label>
        </div>

        <div className="col-md-12 d-flex justify-content-end align-items-center gap-3 py-2 submit-btn mt-3">
          <Button
            variant="secondary"
            onClick={() => setShow(false)}
            className="d-flex justify-content-center align-items-center bg-pale-red border-0 modal-btn fs-small-13"
          >
            Cancel
          </Button>
          <Button
            variant="secondary"
            type="submit"
            onClick={() => setShow(false)}
            className="d-flex justify-content-center align-items-center bg-pale-blue border-0 modal-btn fs-small-13"
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}

export default FormComponent;
