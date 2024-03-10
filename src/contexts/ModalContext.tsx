import { ReactNode, createContext, useState } from "react";
interface Modal {
  modal: boolean;
  handleModal: () => void;
}
const initModal: Modal = {
  modal: false,
  handleModal: () => {},
};
export const ModalContext = createContext(initModal);

const ModalContextProvider = ({ children }: { children: ReactNode }) => {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };
  return (
    <ModalContext.Provider value={{ modal, handleModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
