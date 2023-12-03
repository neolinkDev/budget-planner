
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';

import 'react-swipeable-list/dist/styles.css';

import { formatDate } from '../helpers/dateFormat';
import { ExpenseProps, Icons } from '../interfaces/interfaces';
import {
  EntertainmentIcon,
  FoodIcon,
  HealthIcon,
  HousingIcon,
  TransportationIcon,
} from './Icons';
import {
  ENTERTAINMENT_CATEGORY,
  FOOD_CATEGORY,
  HEALTH_CATEGORY,
  HOUSING_CATEGORY,
  TRANSPORTATION_CATEGORY,
} from '../constants/expensesTypes';

const iconsObj: Icons = {
  [FOOD_CATEGORY]: <FoodIcon />,
  [TRANSPORTATION_CATEGORY]: <TransportationIcon />,
  [ENTERTAINMENT_CATEGORY]: <EntertainmentIcon />,
  [HOUSING_CATEGORY]: <HousingIcon />,
  [HEALTH_CATEGORY]: <HealthIcon />
}

export const Expense = ({ expense, setEditExpense, deleteExpense }: ExpenseProps) => {

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction 
        onClick={() => setEditExpense(expense)}>
        Editar
      </SwipeAction>
    </LeadingActions>
  );
    
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        destructive={true}
        onClick={
          () => {
            if (expense.id !== undefined) {
              deleteExpense(expense.id);
            }
          }
        }
      >
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={ leadingActions() }
        trailingActions={ trailingActions() }
      >
        <div className='expense shadow'>

          <div className="content-expense">
            
            {
              iconsObj[expense.category] || <p>Icono Gasto</p>
            }

            <div className="description-expense">

              <p className='category'>{ expense.category }</p>
              <p className='name-expense'>{ expense.name }</p>
              <p className='date-expense'>
                Agregado el: {''}
                <span>{ formatDate(expense.date!) }</span>
              </p>

            </div>


          </div>
            <div className="amount-expense">${ expense.amount }</div>

        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}
