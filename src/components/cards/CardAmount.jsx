import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import {getIngresos } from '../../slices'

export const CardAmount = () => {
  
  const dispatch = useDispatch();
  const { totalIngresos } = useSelector( state => state.ingresos);
  const { totalReports } = useSelector( state => state.reports);

  const getIngresosCard = async() => dispatch( getIngresos()); 
  useEffect(() => {
    getIngresosCard();
  }, []);

  return (
    <Card>
      <Card.Title className="card-body-amount">
          <p>Total:</p>
          <p>${ totalIngresos - totalReports }.00</p>
        </Card.Title>
      <Card.Body style={{ display: "block" }}>
        <p>Total de egresos:  <strong> ${totalReports}.00 </strong>   </p>
        <p> Total de ingresos: <strong> ${totalIngresos }.00 </strong>  </p>
      </Card.Body>
    </Card>
  );
};
