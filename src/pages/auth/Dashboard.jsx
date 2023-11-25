import { useEffect, useState } from "react";
import { CardAmount, ListCardsItems, ModalAddAmount } from "../../components/";
import { useDispatch, useSelector } from "react-redux";
import { getReports, onLoggout } from "../../slices";

export const Dashboard = () => {
  
  const [modalState, setModalState] = useState(false);
  const dispatch = useDispatch();
  
  const reports = useSelector((state) => state.reports);
  useEffect(() => {
    getAllReports();
  }, []);

  const modalToggle = () => setModalState(!modalState);
  const signOut = () => dispatch(onLoggout());

  const getAllReports = () => dispatch(getReports());
  return (
    <>
      <nav> 
        <h1 className="main-title"> Tus movimientos </h1>
        <a className="sing-out-button" onClick={signOut} > Cerrar sesion </a>
      </nav>
      <CardAmount />
      <main>
        {reports.reports.map(({ amount, name, description }, index) => (
          <ListCardsItems key={index} amountName={name} amount={amount} description={description} />
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
