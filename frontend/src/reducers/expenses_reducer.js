import { RECEIVE_EXPENSES, RECEIVE_NEW_EXPENSE, DELETE_EXPENSE } from '../actions/expense_actions';

const ExpensesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_EXPENSES:
            return action.expenses.data;
        case RECEIVE_NEW_EXPENSE:
            return Object.assign({}, action.expense.data);
        case DELETE_EXPENSE: 
            let newState = Object.assign({}, state)
            delete newState[action.expenseId]
            return newState
        default:
            return state;
    }
};

export default ExpensesReducer;