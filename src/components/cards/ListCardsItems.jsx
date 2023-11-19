import { Card } from "react-bootstrap";

export const ListCardsItems = ({ amountName = "", amount = 0 }) => {
  return (
    <Card className="list-card-items" >
      <div className="card-body" >
        <p> {amountName} </p>
        <p> ${amount}.00 </p>
      </div>
    </Card>
  );
};
