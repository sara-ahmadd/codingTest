import React, { ReactNode, createContext, useState } from "react";
import { Employee } from "../../interfaces";
export interface EmployContext {
  employees: Employee[];
  handleEmpoyeesArray: (emp: Employee) => void;
  updateEmployees: (emp: Employee) => void;
}
const initContext: EmployContext = {
  employees: [
    {
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
      image: "public/images/freshCart.jpg",
      id: "andhu44893sdhu3h4",
    },
  ],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleEmpoyeesArray: (emp: Employee) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateEmployees: (emp: Employee) => {},
};
export const EmployeesContext = createContext(initContext);
const EmployeeContextProvider = ({ children }: { children: ReactNode }) => {
  const [employees, setEmployees] = useState<Employee[]>(initContext.employees);

  const handleEmpoyeesArray = (newEmployee: Employee) => {
    if (employees) {
      const findEmployee = employees.find((emp) =>
        emp.name.includes(newEmployee.name)
      );
      const findEmployeeIndex = employees.findIndex(
        (emp) => emp.id === newEmployee.id
      );
      if (findEmployee) {
        const newArr: Employee[] = employees.splice(
          findEmployeeIndex,
          1,
          newEmployee
        );
        setEmployees(newArr);
      }
      setEmployees([...employees, newEmployee]);
    }
  };
  const updateEmployees = (deletedEmp: Employee) => {
    if (employees) {
      const newArr = employees.filter((emp) => emp.name !== deletedEmp.name);
      setEmployees(newArr);
    }
  };

  return (
    <EmployeesContext.Provider
      value={{ employees, handleEmpoyeesArray, updateEmployees }}
    >
      {children}
    </EmployeesContext.Provider>
  );
};

export default EmployeeContextProvider;
