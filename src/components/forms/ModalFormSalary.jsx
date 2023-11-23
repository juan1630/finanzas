import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { selectValuesSalary } from "../../helpers/actions";
import { useFormModal } from "../../hooks";
import { addNewIngreso } from "../../slices";

export const ModalFormSalary = () => {
  const initialState = {
    description: "",
    amount: "",
    category: "salario",
    date: "",
  };

  const dispatch = useDispatch();

  const { formState, today, resetForm, onChangeFormModal } =
    useFormModal(initialState);

  const onChange = ({ target }) => {
    const { name, value } = target;
    onChangeFormModal(name, value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewIngreso(formState));
  };

  return (
    <Form>
      <Form.Group>
        <Form.Label> Descripción: </Form.Label>
        <Form.Control onChange={onChange} name="description" />

        <Form.Label> Cantidad: </Form.Label>
        <Form.Control onChange={onChange} name="amount" />

        <Form.Label className="mt-2">Categoría:</Form.Label>
        <Form.Select
          value={formState.category}
          onChange={onChange}
          name="category"
        >
          {selectValuesSalary
            .sort((a, b) => a.value.toLowerCase() - b.value.toLowerCase())
            .map(({ displayName, value }, index) => (
              <option key={index} value={value}>
                {displayName}
              </option>
            ))}
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
        <button
          type="button"
          className="mt-2 rounded-button"
          onClick={onSubmit}
        >
          Agregar
        </button>
        <button
          type="button"
          className="mt-2 rounded-button"
          onClick={resetForm}
        >
          Cancelar
        </button>
      </Form.Group>
    </Form>
  );
};
