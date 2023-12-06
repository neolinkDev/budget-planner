import { ModalFormState, ExpenseListProps } from '../interfaces/interfaces';
import { Expense } from './Expense';

export const ExpenseList = ({
  expenseState,
  setEditExpense,
  deleteExpense,
  filter,
  filterExpense,
}: ExpenseListProps) => {
  return (
    <div className="container expense-list">
      {
        filter ? (
          <>
            <h2>
              {
                filterExpense.length ? 'Gastos' : 'Categoría sin gastos'
              }
            </h2>

            {
              filterExpense.map((expense: ModalFormState) => (
                <Expense
                  key={expense.id}
                  expense={expense}
                  setEditExpense={setEditExpense}
                  deleteExpense={deleteExpense}
                />
              ))
            }
          </>
        ) : (
          <>
            <h2>
              {
                expenseState.length ? 'Gastos' : 'Sin Gastos'
              }
            </h2>

            {
              expenseState.map((expense: ModalFormState) => (
                <Expense
                  key={expense.id}
                  expense={expense}
                  setEditExpense={setEditExpense}
                  deleteExpense={deleteExpense}
                />
              ))
            }
          </>
        )
      }
    </div>

  );
};
