

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
  setBudget: React.Dispatch<React.SetStateAction<number>>
  expenseState: ModalFormState[]
  setExpenseState: React.Dispatch<React.SetStateAction<ModalFormState[]>>
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>
  setFilter: React.Dispatch<React.SetStateAction<string>>
}

export interface ModalProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  animateModal: boolean
  setAnimateModal: React.Dispatch<React.SetStateAction<boolean>>,
  saveExpense: (expense: ModalFormState) => void;
  editExpense: ModalFormState
  setEditExpense: React.Dispatch<React.SetStateAction<ModalFormState>>,
}

export interface ModalFormState {
  id?: string;
  name: string
  amount: number
  category: string
  date?: Date | null
}

export interface ExpenseProps {  
  expense: ModalFormState;
  setEditExpense: React.Dispatch<React.SetStateAction<ModalFormState>>
  deleteExpense: (id: string) => void
}

export interface Icons {
  [key: string]: JSX.Element;
}

export interface ExpenseListProps {  
  expenseState: ModalFormState[];
  setEditExpense: React.Dispatch<React.SetStateAction<ModalFormState>>
  deleteExpense: (id: string) => void
  filter: string
  filterExpense: ModalFormState[]
}