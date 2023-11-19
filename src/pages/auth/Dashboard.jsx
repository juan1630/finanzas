import { useState } from "react";
import { Card, ListCardsItems, ModalAddAmount } from "../../components/";


export const Dashboard = () => {
  const [modalState, setModalState] = useState(true);

  const modalToggle = () => setModalState(!modalState);

  return (
    <>
      <h2> Tus movimientos </h2>
      <Card />
        <pre> { JSON.stringify(modalState) } </pre>
      <main>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <ListCardsItems key={i} amountName="Comida" />
        ))}
      </main>
      <button
        type="button"
        onClick={modalToggle}
        className="action-button-add-item"
      >
        +
      </button>
          
      <ModalAddAmount modalState={modalState} modalToggle={modalToggle} />

    </>
  );
};
