import { useState } from 'react';
import { NewBudgetProps } from '../interfaces/interfaces';
import { Message } from './Message';


export const NewBudget = ({ budget, setBudget, setIsValid }: NewBudgetProps) => {

  const [message, setMessage] = useState<string>('')

  //
  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {

    const value = Number(event.target.value);

    if (!isNaN(value)) {
      setBudget(value);
    }
    setMessage('');
  }

  //
  function handleBudget(e: React.FormEvent){
    e.preventDefault();

    if(budget <= 0){
      setMessage('presupueso inválido')
      return;
    }
    setMessage('');
    setIsValid(true);
  
    
  }

  return (

    <div className="container-budget container shadow">

      <form onSubmit={ handleBudget } className="form">

        <div className="field">
          
          <label>Ingresar Presupuesto</label>

          <input
            className="new-budget"
            type="text"
            placeholder="Añade tu presupuesto"
            value={ budget }
            onChange={ handleChange }
          />

        </div>

        <input type="submit" value="Ingresar" />

        {
          message && <Message MessageType='error'>{ message }</Message>
        }

      </form>
    </div>
  );
};
