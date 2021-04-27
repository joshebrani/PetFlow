import axios from 'axios';

export const getExpenses = () => {

    return axios.get('/api/expenses')
};

export const writeExpense = data => {

    return axios.post('/api/expenses/', data)
}


export const deleteExpense = expense => {
    return axios({
        url: '/api/expenses/delete',
        method: 'DELETE',
        data: {expense: expense}
    })
}