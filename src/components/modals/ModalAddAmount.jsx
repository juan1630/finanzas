import { Modal, Tabs, Tab } from "react-bootstrap";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ModalForm } from "../forms/ModalForm";
import { ModalFormSalary } from "../forms/ModalFormSalary";

export const ModalAddAmount = ({ modalState, modalToggle }) => {
  return (
    <Modal animation={true} show={modalState} onHide={modalToggle}>
      <Modal.Header className="header-align margin-top-5">
            <button className="close-button-modal" onClick={modalToggle} > X </button>
        </Modal.Header>
      <Modal.Body>
        <Tabs>
          <Tab eventKey={1} title="Agregar gasto">
            <ModalForm modalToggle={modalToggle} />
          </Tab>
          <Tab eventKey={2} title="Agregar ingreso">
            <ModalFormSalary />
          </Tab>
        </Tabs>
      </Modal.Body>
    </Modal>
  );
};
