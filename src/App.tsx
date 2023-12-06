import { useEffect, useState } from 'react';

import { Header } from './components/Header';
import { NewBudget } from './components/NewBudget';
import { BudgetControl } from './components/BudgetControl';
import { AddCircle } from './components/Icons';
import { Modal } from './components/Modal';
import { ExpenseList } from './components/ExpenseList';

import { ModalFormState } from './interfaces/interfaces';
import { Filters } from './components/Filters';

function App() {
  
  const [budget, setBudget] = useState<number>(
    Number(localStorage.getItem('budget')) ?? 0
  );
  const [isValid, setIsValid] = useState<boolean>(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [expenseState, setExpenseState] = useState<ModalFormState[]>( 
    localStorage.getItem('expense') ? JSON.parse(localStorage.getItem('expense')!) : []
  );
  const [editExpense, setEditExpense] = useState<ModalFormState>({
    name: '',
    amount: 0,
    category: ''
  });
  const [filter, setFilter] = useState<string>('');
  const [filterExpense, setFilterExpense] = useState<ModalFormState[]>([]);
  
  //
  useEffect(() => {
    // console.log(Object.keys(editExpense).length)
    if (
      editExpense.name !== '' ||
      editExpense.amount !== 0 ||
      editExpense.category !== ''
    ) {
      setModal(true);
      setAnimateModal(true);
    }
  }, [editExpense])

  //
  useEffect(() => {
    localStorage.setItem('budget', budget.toString() ?? 0);
  }, [budget])
  
  //
  useEffect(() => {
    localStorage.setItem('expense', JSON.stringify(expenseState) ?? []);
  }, [expenseState])
  
  //
  useEffect(()=>{
    const budgetLocalStorage = Number(localStorage.getItem('budget')) ?? 0

    if(budgetLocalStorage > 0 ) setIsValid(true);
  }, [])
  
  // filter changes
  useEffect(() => {
    if(filter){
      const expensesFiltered = expenseState.filter( expense => expense.category === filter )
      setFilterExpense(expensesFiltered)
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter])
  
  //
  const handleNewBudget = (): void => {
    setModal(true);
    setAnimateModal(true);
    setEditExpense({
      name: '',
      amount: 0,
      category: ''
    });
  }

  // 
  const saveExpense = (expense: ModalFormState) => {

    if(expense.id){
      const updateExpense = expenseState.map( expSta => expSta.id === expense.id ? expense : expSta )
      setExpenseState(updateExpense)
      setEditExpense({
        name: '',
        amount: 0,
        category: ''})
    }else {

      const expenseID: ModalFormState = {
        ...expense,
        id: crypto.randomUUID(),
        date: new Date(Date.now())
      }
      setExpenseState([...expenseState, expenseID]);
    }

    setAnimateModal(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
  }

  //
  const deleteExpense = (id: string) => {
    const updateExpense = expenseState.filter( expense => expense.id !== id)
    setExpenseState(updateExpense);
  }

  return (
    <div className={ modal ? 'fixed-height-viewport' : '' }>
      <Header>

        {
          isValid ? 
          (
            <>
              <BudgetControl budget={ budget } expenseState={ expenseState } />
              
              <div 
                className='add-circle shake-horizontal'
                onClick={ handleNewBudget }
              >
                <AddCircle />
              </div>
            </>
            
          ) : 
          (
            <NewBudget 
              budget={ budget } 
              setBudget={ setBudget } 
              setIsValid={ setIsValid }
            />
          )
        }

      </Header>
      
      {
        isValid && 
                  <main>
                    <Filters 
                      filter={ filter }
                      setFilter={ setFilter }
                    />
                    <ExpenseList 
                      expenseState={ expenseState } 
                      setEditExpense={ setEditExpense }
                      deleteExpense={ deleteExpense }
                      filter={ filter }
                      filterExpense={ filterExpense }
                    />
                  </main>
      }

      {/* {
        isValid && 
          <div className='add-circle'>
            <AddCircle />
          </div>
      } */}

      {
        modal && <Modal 
                    setModal={ setModal } 
                    animateModal={ animateModal } 
                    setAnimateModal={ setAnimateModal}
                    saveExpense={ saveExpense }
                    editExpense={ editExpense }
                    setEditExpense={ setEditExpense }
                  />
      }
      
    </div>
  );
}

export default App;
