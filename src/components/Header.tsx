// import { NewBudget } from './NewBudget';

import { HeaderProps } from '../interfaces/interfaces';

export const Header = ({ children }: HeaderProps) => {
  return (
    <header>
      <h1>BudgetTracker</h1>
      { children }
    </header>
  );
};
