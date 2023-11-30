import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import {
  ENTERTAINMENT_CATEGORY,
  FOOD_CATEGORY,
  HEALTH_CATEGORY,
  HOUSING_CATEGORY,
  TRANSPORTATION_CATEGORY,
} from '../constants/expensesTypes';
import { ModalFormState, ModalProps } from '../interfaces/interfaces';
import { Close } from './Icons';
import { Message } from './Message';
import { parseInputValue } from '../helpers/inputsUtils';


// component
export const Modal = ({
  setModal,
  animateModal,
  setAnimateModal,
  saveExpense,
  editExpense
}: ModalProps) => {

  //
  const [form, setForm] = useState<ModalFormState>({
    name: '',
    amount: 0,
    category: '',
    id: '',
    date: null
  })
  const { name, amount, category, id, date } = form;

  //
  const [msg, setMsg] = useState<string>('');

  //
  useEffect(() => {
    // console.log(Object.keys(editExpense).length)
    if (
      editExpense.name !== '' ||
      editExpense.amount !== 0 ||
      editExpense.category !== ''
    ) {
      // console.log(editExpense);
      setForm(editExpense);
    }
  }, []);
  
  //
  const handleHiddenModal = (): void => {
    setAnimateModal(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  //
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {

    const value = parseInputValue(e.target.name, e.target.value);

    setForm({
      ...form,
      [e.target.name]: value
    })
  }

  //
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {

    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    })
  }

  // submit button
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if([name, amount, category].includes('')){
      setMsg('Todos los campos son requeridos')
      return;
    }

    if(amount <= 0){
      setMsg('Numero inválido')
      return;
    }

    saveExpense({ name, amount, category, id, date })
    
  }

  return (
    <div className="modal">

      <div
        className="close-modal rotate-vertical-center"
        onClick={ handleHiddenModal }
      >
        <Close />
      </div>

      <form
        className={`form ${
          animateModal ? 'animated1 fadeIn' : 'fadeOut animated2'
        }`}
        onSubmit={ handleSubmit }
      >
        <legend>
          {
            editExpense.name ? 'editar gasto': 'nuevo gasto'
          }
        </legend>

        {
          msg && <Message MessageType="error" >{ msg }</Message>
        }

        <div className="field">

          <label htmlFor="name">Nombre del Gasto</label>

          <input
            type="text"
            id="name"
            placeholder="Añade el nombre del gasto"
            name="name"
            value={ name }
            onChange={ handleInputChange }
          />

        </div>

        <div className="field">

          <label htmlFor="amount">Cantidad</label>

          <input
            type="number"
            id="amount"
            placeholder="Añade la cantidad del gasto"
            name="amount"
            value={ amount }
            onChange={ handleInputChange }
          />

        </div>

        <div className="field">

          <label htmlFor="category">Tipo de gasto</label>

          <select 
            id="category" 
            name="category"
            onChange={ handleSelectChange }
            value={ category }
          >
            <option value="">-- Seleccionar --</option>
            <option value={ FOOD_CATEGORY }>Comida</option>
            <option value={ TRANSPORTATION_CATEGORY }>Transporte</option>
            <option value={ ENTERTAINMENT_CATEGORY }>Entretenimiento</option>
            <option value={ HOUSING_CATEGORY }>Vivienda</option>
            <option value={ HEALTH_CATEGORY }>Salud</option>
          </select>

        </div>

        <input 
          type="submit" 
          value={editExpense.name ? 'guardar cambios': 'añadir gasto'} 
        />
      </form>
    </div>
  );
};
