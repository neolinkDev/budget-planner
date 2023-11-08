import { useState } from 'react';
import { Header } from './components/Header';
import { NewBudget } from './components/NewBudget';
import { BudgetControl } from './components/BudgetControl';
import { AddCircle } from './components/Icons';

function App() {
  
  const [budget, setBudget] = useState<number>(0);
  const [isValid, setIsValid] = useState<boolean>(false);

  return (
    <div>
      <Header>

        {
          isValid ? 
          (
            <>
              <BudgetControl budget={ budget } />
              
              <div className='add-circle shake-horizontal'>
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
      
    </div>
  );
}

export default App;
