import axios from 'axios';
import React from 'react';
import './expense.scss'
import { withRouter } from 'react-router-dom'


class Expenses extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            expenses: []
        };
        this.handleClick = this.handleClick.bind(this);

        this.deleteExp = this.deleteExp.bind(this);
    

    }

    componentDidMount() {

        this.props.fetchExpenses();
    }

    componentWillReceiveProps(newState) {
        this.setState({ expenses: newState.expenses });
    }

    handleClick(e) {
        e.preventDefault();
        this.props.openModal("Create Expense")
    }

    deleteExp(expense){
        console.log(this.props)
        const id = expense._id;

        this.props.deleteExpense(id);
        this.props.fetchExpenses();
        this.props.history.push("/addexpense"); 
        this.props.history.push("/expenses")
    }

    
    


    render() {

        if (!this.props.state.expenses.length) {
            return (
              <div>
                There are currently no expenses, click here to get started!
                click here:{" "}
                {<button onClick={this.handleClick}>Add an Expense</button>} to add an expense
              </div>
            );
            
        } else {
            return (
                <div className="entire-expense">
                    <h1 className='exp-title'>Expenses</h1>
                    <div className="exp-button">
                        <button onClick={this.handleClick}>Add an Expense</button>
                    </div>
                            <div className='categories'>
                                <p>Category</p>
                                <p>Date</p>
                                <p>Amount</p>
                                <p>Delete Expense</p>

                            </div>
                    {this.props.state.expenses.map((expense) => (
                        <h2>Here is a receipt!</h2>,
                        <div className="expense-list">
                            <ul className='exp'>
                                <li>{expense.category}</li>
                                <li>{expense.date}</li>
                                <li className="amount">{expense.amount}</li>
                                <span onClick={()=> this.deleteExp(expense)} className="deleteexpense">Delete Expense</span>

                            </ul>
                        </div>
                    ))}
                </div>

            );
        }
    }
}
                                

                        


export default withRouter(Expenses);
