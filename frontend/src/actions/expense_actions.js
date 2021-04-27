import * as APIUtil from '../util/expense_api_util'

export const RECEIVE_EXPENSES = "RECEIVE_EXPENSES";
export const RECEIVE_NEW_EXPENSE = "RECEIVE_NEW_EXPENSE";
export const DELETE_EXPENSE = "DELETE_EXPENSE";


export const receiveExpenses = expenses => {
 
return(
    {
    type: RECEIVE_EXPENSES,
    expenses
}
)}

export const receiveNewExpense = expense => {

    return({
    
    type: RECEIVE_NEW_EXPENSE,
    expense
})}


export const fetchExpenses = () => dispatch => {

    return(
        APIUtil.getExpenses()
            .then(expenses => dispatch(receiveExpenses(expenses)))
            .catch(err => console.log(err))
    )
}


export const createExpense = data => dispatch => {

    return(
        APIUtil.writeExpense(data)
            .then(expense => dispatch(receiveNewExpense(expense)))
            .catch(err => console.log(err))
    );
}

export const deleteExpense = id => dispatch => {
    return(
        APIUtil.deleteExpense(id)
            .then(expense => dispatch(deleteExpense(expense)))
            .catch(err => console.log(err))
    );
}
