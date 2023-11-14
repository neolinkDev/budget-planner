
import { AMOUNT_FIELD_NAME } from '../constants/expensesTypes';



export function parseInputValue(name: string, inputValue: string): string | number {
  if (name === AMOUNT_FIELD_NAME) {
    return parseFloat(inputValue);
  }
  return inputValue;
}