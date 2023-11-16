
import { ModalFormState } from '../interfaces/interfaces';
import { Expense } from './Expense';

interface ExpenseListProps {  
  expenseState: ModalFormState[];
}

export const ExpenseList = ({ expenseState }: ExpenseListProps) => {
  return (
    <div className="container expense-list">
      <h2>{ expenseState.length ? 'Gastos' : 'Sin Gastos' }</h2>
      {
        expenseState.map( (expense: ModalFormState) => (
          <Expense key={ expense.id } expense={ expense } />
        ))
      }
    </div>
  )
}
