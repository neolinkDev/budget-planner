import { useState } from 'react';
import { Header } from './components/Header';
import { NewBudget } from './components/NewBudget';

function App() {
  
  const [budget, setBudget] = useState<number>(0);
  const [isValid, setIsValid] = useState<boolean>(false);

  return (
    <div>
      <Header>

        {
          isValid ? 
          (
            
            <p>Gastos componente</p>
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
    </div>
  );
}

export default App;
