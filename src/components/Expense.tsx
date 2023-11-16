
import { formatDate } from '../helpers/dateFormat';
import { ModalFormState } from '../interfaces/interfaces';


interface ExpenseProps {  
  expense: ModalFormState;
}


export const Expense = ({ expense }: ExpenseProps) => {



  return (
    <div className='expense shadow'>

      <div className="content-expense">

        <div className="description-expense">

          <p className='category'>{ expense.category }</p>
          <p className='name-expense'>{ expense.name }</p>
          <p className='date-expense'>
            Agregado el: {''}
            <span>{ formatDate(expense.date!) }</span>
          </p>

        </div>


      </div>
        <div className="amount-expense">${ expense.amount }</div>

    </div>
  )
}
