import { Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

export const ModalAddAmount = ({ modalState, modalToggle }) => {
  return (
    <Modal  animation={true} show={modalState} onHide={modalToggle}>
      <Modal.Header> Agregar gasto </Modal.Header>
      <Modal.Body>
        <h2>hola</h2>
      </Modal.Body>
      <Modal.Footer onClick={modalToggle} > close </Modal.Footer>
    </Modal>
  );
};
