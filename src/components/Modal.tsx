

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

      </form>

    </div>
  )
}
