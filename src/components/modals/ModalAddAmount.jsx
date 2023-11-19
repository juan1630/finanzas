import { Modal, Button, Form } from "react-bootstrap";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const ModalAddAmount = ({ modalState, modalToggle }) => {
  
  const createdDate = new Date().toISOString();
  const [ today ] = createdDate.split('T');

  return (
    <Modal animation={true} show={modalState} onHide={modalToggle}>
      <Modal.Header> Agregar gasto </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="mt-2">Nombre:</Form.Label>
            <Form.Control type="name" placeholder="Ejp: Pizza &#127829;"/>
            <Form.Label className="mt-2">Cantidad:</Form.Label>
            <Form.Control type="name" placeholder="Cantidad &#36;500.00"/>
            <Form.Label className="mt-2">Descripcion:</Form.Label>
            <Form.Control type="name" placeholder="Descripcion &#128221;"/>
            <Form.Label className="mt-2">Categoría:</Form.Label>
            <Form.Select >
              <option>Selecciona una categoría</option>
              <option value="alimentación">Alimentación</option>
              <option value="transporte">Transporte</option>
              <option value="hogar">Hogar</option>
              <option value="familia">Familia</option>
              <option value="diversion">Diversión</option>
              <option value="deudas">Deudas</option>
              <option value="telefonia">Telefonía</option>
              <option value="despensa">Despensa</option>
              <option value="internet">Internet</option>
              <option value="electronica">Electroníca</option>
              <option value="mascotas">Mascotas</option>
              <option value="apredizaje">Apredizaje</option>
              <option value="streaming">Streaming</option>
              <option value="servicios profesionales">Servicios profesionales</option>
              <option value="otros">Otros</option>
            </Form.Select>
            <Form.Label className="mt-2" > Fecha: </Form.Label>
            <input type="date" defaultValue={today} max={today} className="date-picker" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="align-items-space-between">
        <Button className="button rounded-button" onClick={modalToggle}>
          Agregar
        </Button>
        <Button className="button button-modal-close" onClick={modalToggle}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
