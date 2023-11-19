export const Card = ({ amount = 0 }) => {
  return (
    <div className="card card-avalible-amount">
      <section className="card-body">
        <h2 className="card-title"> Saldo disponible:</h2>
        <h3 className="card-amount"> ${amount}.00 </h3>
      </section>
    </div>
  );
};
