import { useState } from 'react';
import { Header } from './components/Header';
import { NewBudget } from './components/NewBudget';
import { BudgetControl } from './components/BudgetControl';
import { AddCircle } from './components/Icons';
import { Modal } from './components/Modal';
import { ModalFormState } from './interfaces/interfaces';

function App() {
  
  const [budget, setBudget] = useState<number>(0);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [expenseState, setExpenseState] = useState<ModalFormState[]>([])

  //
  const handleNewBudget = (): void => {
    setModal(true);
    setAnimateModal(true);
  }

  // 
  const saveExpense = (expense: ModalFormState) => {

    const expenseID: ModalFormState = {
      ...expense,
      id: crypto.randomUUID()
    }

    setExpenseState([...expenseState, expenseID])
   
    setAnimateModal(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
  }

  return (
    <div>
      <Header>

        {
          isValid ? 
          (
            <>
              <BudgetControl budget={ budget } />
              
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
                  />
      }
      
    </div>
  );
}

export default App;
