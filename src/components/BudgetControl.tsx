import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { formatCurrency } from '../helpers/amountFormat';
import { BudgetControlProps } from '../interfaces/interfaces';


export const BudgetControl = ({ budget, setBudget, expenseState, setExpenseState, setIsValid, setFilter }: BudgetControlProps) => {

  const [percentage, setPercentage] = useState<number>(0)
  const [balance, setBalance] = useState<number>(0);
  const [expenses, setExpenses] = useState<number>(0);

  //
  useEffect(() => {

    const totalSpent = expenseState.reduce((acc, expense) => expense.amount + acc, 0);
    const totalBudget = budget - totalSpent;
    // console.log(totalBudget)

    // calculate percent
    const newPercentage = Number((((budget - totalBudget) / budget) * 100).toFixed(2));
    
    setBalance(totalBudget);
    setExpenses(totalSpent);
    
    setTimeout(() => {
      setPercentage(newPercentage);
    }, 1000);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expenseState])

  //
  function handleReset(){
    const result = confirm('¿Deseas reiniciar tu presupuesto?');
    
    if(result){
      setExpenseState([]);
      setBudget(0);
      setIsValid(false);
      setFilter('');
    }
  }
  
  return (

    <div 
      className="container container-budget two-columns shadow"
    >

      <div 
        style={{ width: 200, height: 200 }}
      >
        <CircularProgressbar 
          value={ percentage }
          text={`${percentage}%`}
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0.25,

            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'butt',

            // Text size
            textSize: '16px',

            // How long animation takes to go from one percentage to another, in seconds
            // pathTransitionDuration: 0.5,

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            pathColor: percentage > 100 ? '#dc2626' : `rgba(62, 152, 199, ${percentage / 100})`,
            textColor: '#f88',
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7',
          })}
        />
      </div>

      <div className="content-budget">

        <button 
          className='reset'
          onClick={ handleReset }
        >
          reiniciar
        </button>

        <p><span>Presupuesto: </span>{ formatCurrency(budget) }</p>

        <p className={`${ balance < 0 ? 'negativo' : ''}`}><span>Saldo: </span>{ formatCurrency(balance) }</p>

        <p><span>Gastos: </span>{ formatCurrency(expenses) }</p>

      </div>

    </div>
  );
};
