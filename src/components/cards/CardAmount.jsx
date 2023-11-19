import { Card } from "react-bootstrap";

export const CardAmount = ({ amount = 0 }) => {
  return (
    <Card>
      <Card.Body style={{ display: "block" }}>
        <Card.Title className="card-body-amount">
          <p>Saldo disponible:</p>
          <p>${amount}.00</p>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};
