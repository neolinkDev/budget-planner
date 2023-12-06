// import { useEffect, useState } from 'react';
import {
  ENTERTAINMENT_CATEGORY,
  FOOD_CATEGORY,
  HEALTH_CATEGORY,
  HOUSING_CATEGORY,
  TRANSPORTATION_CATEGORY,
} from '../constants/expensesTypes';

interface FiltersProps {
  filter: string
  setFilter: React.Dispatch<React.SetStateAction<string>>
}

export const Filters = ({ filter, setFilter}: FiltersProps ) => {
  return (
    <div className="filters shadow container">

      <form>

        <div className="field">

          <label>Filtrar tipo de gasto</label>

          <select
            value={ filter }
            onChange={ e => setFilter(e.target.value) }
          >
            <option value="">-- Seleccionar --</option>
            <option value={FOOD_CATEGORY}>Comida</option>
            <option value={TRANSPORTATION_CATEGORY}>Transporte</option>
            <option value={ENTERTAINMENT_CATEGORY}>Entretenimiento</option>
            <option value={HOUSING_CATEGORY}>Vivienda</option>
            <option value={HEALTH_CATEGORY}>Salud</option>
          </select>

        </div>

      </form>

    </div>
  );
};
