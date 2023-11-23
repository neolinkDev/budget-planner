import { useEffect, useState } from 'react';
import { formatCurrency } from '../helpers/amountFormat';
import { BudgetControlProps } from '../interfaces/interfaces';

export const BudgetControl = ({ budget, expenseState}: BudgetControlProps) => {

  const [balance, setBalance] = useState<number>(0);
  const [expenses, setExpenses] = useState<number>(0);

  useEffect(() => {

    const totalSpent = expenseState.reduce((acc, expense) => expense.amount + acc, 0);
    const totalBudget = budget - totalSpent;
    // console.log(totalBudget)

    setBalance(totalBudget);
    setExpenses(totalSpent);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expenseState])
  
  return (

    <div 
      className="container container-budget two-columns shadow"
    >

      <div>Gráfica</div>

      <div className="content-budget">

        <p><span>Presupuesto: </span>{ formatCurrency(budget) }</p>
        <p><span>Saldo: </span>{ formatCurrency(balance) }</p>
        <p><span>Gastos: </span>{ formatCurrency(expenses) }</p>

      </div>

    </div>
  );
};
