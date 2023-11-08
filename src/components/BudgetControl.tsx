import { formatCurrency } from '../helpers/amountFormat';
import { BudgetControlProps } from '../interfaces/interfaces';

export const BudgetControl = ({ budget }: BudgetControlProps) => {
  return (

    <div 
      className="container container-budget two-columns shadow"
    >

      <div>Gráfica</div>

      <div className="content-budget">

        <p><span>Presupuesto: </span>{ formatCurrency(budget) }</p>
        <p><span>Saldo: </span>{ formatCurrency(0) }</p>
        <p><span>Gastos: </span>{ formatCurrency(0) }</p>

      </div>

    </div>
  );
};
