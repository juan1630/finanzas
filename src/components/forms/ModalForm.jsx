import { useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import "../../index.css";
import { addNewReport } from "../../slices";
import { useFormModal } from '../../hooks';

import "bootstrap/dist/css/bootstrap.min.css";

export const ModalForm = ({ modalToggle }) => {
  
  const dispatch = useDispatch();

  const { onChangeFormModal, formState, today } = useFormModal();

  const onChange = (event) => {
    event.preventDefault();
    const { target } = event;
    const { name, value } = target;
    onChangeFormModal(name,value)

  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(addNewReport(formState));
      modalToggle();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="mt-2">Nombre:</Form.Label>
          <Form.Control
            name="name"
            onChange={onChange}
            value={formState.name}
            type="name"
            placeholder="Ejp: Pizza &#127829;"
          />

          <Form.Label className="mt-2">Cantidad:</Form.Label>
          <Form.Control
            type="amount"
            onChange={onChange}
            name="amount"
            placeholder="Cantidad &#36;500.00"
            value={formState.amount}
          />

          <Form.Label className="mt-2">Descripcion:</Form.Label>
          <Form.Control
            name="description"
            type="description"
            onChange={onChange}
            value={formState.description}
            placeholder="Descripcion &#128221;"
          />

          <Form.Label className="mt-2">Categoría:</Form.Label>
          <Form.Select
            value={formState.category}
            onChange={onChange}
            name="category"
          >
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
            <option value="servicios profesionales">
              Servicios profesionales
            </option>
            <option value="otros">Otros</option>
          </Form.Select>

          <Form.Label className="mt-2"> Fecha: </Form.Label>
          <input
            name="date"
            type="date"
            max={today}
            className="date-picker"
            onChange={onChange}
          />
          <hr />
          <button type="button" className="mt-2 rounded-button" onClick={onSubmit}>Agregar</button>
        </Form.Group>
      </Form>
    </>
  );
};
