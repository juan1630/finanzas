import { useState } from "react";
import { CardAmount, ListCardsItems, ModalAddAmount } from "../../components/";


export const Dashboard = () => {
  const [modalState, setModalState] = useState(false);

  const modalToggle = () => setModalState(!modalState);

  return (
    <>
      <h1 className="main-title" > Tus movimientos </h1>
      <CardAmount />
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
