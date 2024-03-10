import { Button } from "react-bootstrap";
import "./form.css";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
function FormComponent({ setShow }: { setShow: (state: boolean) => void }) {
  const [preview, setPreview] = useState<ArrayBuffer | null | string>();
  const onDrop = useCallback((acceptedFiles: FileList) => {
    const file = new FileReader();
    file.onload = () => {
      setPreview(file.result);
    };
    file.readAsDataURL(acceptedFiles[0]);
  }, []);
  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone({ onDrop });
  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (acceptedFiles[0]) {
      const formData = new FormData();
      formData.append("file", acceptedFiles[0]);
    }
    console.log(acceptedFiles[0]);
  };

  return (
    <div className="d-flex flex-column justify-content-between align-items-start">
      <form className="w-100" onSubmit={submitForm}>
        <h3 className="form-title">Personal Info</h3>
        <div className="row g-2 justify-content-between align-items-start">
          <div className="col-md-3">
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <p>Drag 'n' drop some files here, or click to select files</p>
              )}
              {preview && (
                <img src={preview as string} alt="" width={200} height={200} />
              )}
            </div>
          </div>
          <div className="col-md-4">
            <div className="mb-1">
              <label htmlFor="name" className="form-label fs-small-13 mb-0">
                Name
              </label>
              <input
                type="text"
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
                type="email"
                className="form-control fs-small-13 shadow-none"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
          </div>
        </div>

        <h3 className="form-title">Office Info</h3>
        <div className="col-md-12">
          <div className="mb-1">
            <label htmlFor="Office" className="form-label fs-small-13">
              Office
            </label>
            <select
              className="form-select fs-small-13 shadow-none"
              id="inputGroupSelect02"
            >
              <option value="" className=" text-muted ">
                Select an option
              </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
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
                className="form-select fs-small-13 shadow-none"
                id="inputGroupSelect02"
              >
                <option value="" className=" text-muted ">
                  Select an option
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="mb-1">
              <label htmlFor="name" className="form-label fs-small-13 mb-0">
                Role
              </label>
              <select
                className="form-select fs-small-13 shadow-none"
                id="inputGroupSelect02"
              >
                <option value="" className=" text-muted ">
                  Select an option
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="mb-1">
              <label htmlFor="name" className="form-label fs-small-13 mb-0">
                Direct Manager
              </label>
              <select
                className="form-select fs-small-13 shadow-none"
                id="inputGroupSelect02"
              >
                <option value="" className=" text-muted ">
                  Select an option
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="col-md-5">
            <div className="mb-1">
              <label htmlFor="name" className="form-label fs-small-13 mb-0">
                Attendence Profile
              </label>
              <select
                className="form-select fs-small-13 shadow-none"
                id="inputGroupSelect02"
              >
                <option value="" className=" text-muted ">
                  Select an option
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="mb-1">
              <label htmlFor="name" className="form-label fs-small-13 mb-0">
                Position
              </label>
              <select
                className="form-select fs-small-13 shadow-none"
                id="inputGroupSelect02"
              >
                <option value="" className=" text-muted ">
                  Select an option
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>

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
