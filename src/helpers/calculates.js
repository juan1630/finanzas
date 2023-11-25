export function caculateTotal  ( ingresos = [] ) {

    if( ingresos.length > 0 ) {
        const total = ingresos.reduce((acumulador, ingreso) => acumulador += Number(ingreso.amount), 0);
        return total;
    }

    return 0;
}