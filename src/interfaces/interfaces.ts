

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
  expenseState: ModalFormState[]
}

export interface ModalProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  animateModal: boolean
  setAnimateModal: React.Dispatch<React.SetStateAction<boolean>>,
  saveExpense: (expense: ModalFormState) => void;
}

export interface ModalFormState {
  id?: string;
  name: string
  amount: number
  category: string
  date?: Date
}

export interface ExpenseProps {  
  expense: ModalFormState;
}

export interface Icons {
  [key: string]: JSX.Element;
}