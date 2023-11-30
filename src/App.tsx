import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { NewBudget } from './components/NewBudget';
import { BudgetControl } from './components/BudgetControl';
import { AddCircle } from './components/Icons';
import { Modal } from './components/Modal';
import { ModalFormState } from './interfaces/interfaces';
import { ExpenseList } from './components/ExpenseList';

function App() {
  
  const [budget, setBudget] = useState<number>(0);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [expenseState, setExpenseState] = useState<ModalFormState[]>([]);
  const [editExpense, setEditExpense] = useState<ModalFormState>({
    name: '',
    amount: 0,
    category: ''
  });
  
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

    
  
    // const expenseID: ModalFormState = {
    //   ...expense,
    //   id: crypto.randomUUID(),
    //   date: new Date(Date.now())
    // }

    // setExpenseState([...expenseState, expenseID]);

    // // console.log(expenseID)
   
    // setAnimateModal(false);

    // setTimeout(() => {
    //   setModal(false);
    // }, 500);

    if(expense.id){
      const updateExpense = expenseState.map( expSta => expSta.id === expense.id ? expense : expSta )
      setExpenseState(updateExpense)
      // console.log(updateExpense)
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
                    <ExpenseList 
                      expenseState={ expenseState } 
                      setEditExpense={ setEditExpense }
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
                  />
      }
      
    </div>
  );
}

export default App;
