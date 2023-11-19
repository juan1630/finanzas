export const ListCardsItems = ({ amountName = "", amount = 0 }) => {
  return (
    <div className="card card-amount-item">
      <h6 className="card-amount-title"> {amountName} </h6>
      <h6 className="card-amount-title"> ${amount}.00 </h6>
    </div>
  );
};
