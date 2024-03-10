import { IconType } from "react-icons";

export interface SideBarLink {
  path: string;
  text: string;
  icon: IconType;
}
export interface Employee {
  id: string;
  name: string;
  phone: string;
  email: string;
  position: string;
  department: string;
  startDate: string;
  office: string;
  role: string;
  directManager: string;
  attendenceProfile: string;
  image: File | undefined | string;
}
