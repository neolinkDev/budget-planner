

import {
  ENTERTAINMENT_CATEGORY,
  FOOD_CATEGORY,
  HEALTH_CATEGORY,
  HOUSING_CATEGORY,
  TRANSPORTATION_CATEGORY,
} from '../constants/expensesTypes';
import { ModalProps } from '../interfaces/interfaces';
import { Close } from './Icons';



export const Modal = ( { setModal, animateModal, setAnimateModal }: ModalProps ) => {

  //
  const handleHiddenModal = (): void => {
    setAnimateModal(false)
    
    setTimeout(() => {
      setModal(false);
      
    }, 500);
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
        className={`form ${ animateModal ? 'animated1 fadeIn' : 'fadeOut animated2'}`}
      >

        <legend>Nuevo Gasto</legend>

        <div className="field">

          <label htmlFor="name">Nombre del Gasto</label>

          <input 
            type="text" 
            id="name" 
            placeholder='Añade el nombre del gasto'
            // name="name" i
          />
          
        </div>

        <div className="field">

          <label htmlFor="amount">Cantidad</label>

          <input 
            type="number" 
            id="amount" 
            placeholder='Añade la cantidad del gasto'
            // name="name" i
          />

        </div>

        <div className="field">

          <label htmlFor="category">Tipo de gasto</label>

          <select 
            id="category"
            
          >
            <option value="">-- Seleccionar --</option>
            <option value={ FOOD_CATEGORY }>Comida</option>
            <option value={ TRANSPORTATION_CATEGORY }>Transporte</option>
            <option value={ ENTERTAINMENT_CATEGORY }>Entretenimiento</option>
            <option value={ HOUSING_CATEGORY }>Vivienda</option>
            <option value={ HEALTH_CATEGORY }>Salud</option>

          </select>

        </div>

        <input type="submit" value="Añadir Gasto" />

      </form>

    </div>
  )
}
