import { Modal, Button } from "react-bootstrap";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ModalForm } from "../forms/ModalForm";

export const ModalAddAmount = ({ modalState, modalToggle }) => {
  
  return (
    <Modal animation={true} show={modalState} onHide={modalToggle}>
      <Modal.Header className="main-title color-black-title margin-top-5" > Agregar gasto </Modal.Header>
      <Modal.Body>
        <ModalForm  modalToggle={modalToggle} />
      </Modal.Body>
    </Modal>
  );
};
