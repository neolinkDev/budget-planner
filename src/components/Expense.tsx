

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

export const Expense = ({ expense }: ExpenseProps) => {

  return (
    <div className='expense shadow'>

      <div className="content-expense">
        
        {iconsObj[expense.category] || <p>Icono Gasto</p>}

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
  )
}
