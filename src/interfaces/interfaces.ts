

export interface HeaderProps {
  children: JSX.Element
}

export interface NewBudgetProps {
  budget: number,
  setBudget: React.Dispatch<React.SetStateAction<number>>,
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>
}

export interface MessageProps {
  children: string
  MessageType: string
}

export interface BudgetControlProps {
  budget: number
}

export interface ModalProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  animateModal: boolean
  setAnimateModal: React.Dispatch<React.SetStateAction<boolean>>
}
