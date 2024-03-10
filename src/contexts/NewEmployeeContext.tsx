import React, { ReactNode, createContext, useState } from "react";
import { Employee } from "../../interfaces";
export interface EmployContext {
  employee: Employee;
  handleNewEmployee: (newEmployee: Employee) => void;
}
const initContext: EmployContext = {
  employee: {
    name: "Sara Khaled Ahmed",
    phone: "01234556677",
    email: "example@example.com",
    position: "HR head",
    department: "Business Development",
    startDate: "12/12/2018",
    office: "Arabic Localizer",
    role: "Employee",
    directManager: "Mohamed tarek",
    attendenceProfile: "Weekend",
    image: undefined,
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleNewEmployee: (newEmployee: Employee) => {},
};
export const EmployeeContext = createContext(initContext);
const NewEmployeeContext = ({ children }: { children: ReactNode }) => {
  const [employee, setEmployee] = useState<Employee>(initContext.employee);

  const handleNewEmployee = (newEmployee: Employee) => {
    if (employee) {
      setEmployee(newEmployee);
    }
  };

  return (
    <EmployeeContext.Provider value={{ employee, handleNewEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export default NewEmployeeContext;
