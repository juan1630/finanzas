import { useEffect, useState } from "react";
import { CardAmount, ListCardsItems, ModalAddAmount } from "../../components/";
import { useDispatch, useSelector } from "react-redux";
import { getReports } from "../../slices";

export const Dashboard = () => {
  const [modalState, setModalState] = useState(false);
  const dispatch = useDispatch();
  const reports = useSelector((state) => state.reports);
  useEffect(() => {
    getAllReports();
  }, []);

  const modalToggle = () => setModalState(!modalState);

  const getAllReports = () => dispatch(getReports());
  return (
    <>
      <h1 className="main-title"> Tus movimientos </h1>
      <CardAmount />
      <main>
        {reports.reports.map(({ amount, name }, index) => (
          <ListCardsItems key={index} amountName={name} amount={amount} />
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
