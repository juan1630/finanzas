import { Card } from "react-bootstrap";

export const ListCardsItems = ({ amountName = "", amount = 0, description = "" }) => {
  return (
    <Card className="list-card-items">
      <div className="card-body">
        <div className="card-body-item">
          <p> {amountName} </p>
          <p> ${amount}.00 </p>
        </div>
      </div>
        <p className="description-p" > Description: {description}  </p>
    </Card>
  );
};
