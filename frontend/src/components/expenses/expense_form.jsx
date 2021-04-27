import React from 'react';
import '../modal/modal.scss';
import {withRouter} from 'react-router-dom'


class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            category: "",
            amount: "$",
            date: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();


        this.props.createExpense(this.state).then(() => this.props.history.push("/addexpense")).then(() => this.props.history.push("/expenses")).then(() => this.props.closeModal());
        this.setState({
            category: "",
            amount: "$",
            date: ""
        })
    }


    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render() {
   
        return (

            <div className="modal-background">
                <div className="modal-child">
                    <div className="close" onClick={() => this.props.closeModal()}>
                        &times;
                    </div>
                    <div className="modal-box">
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <label>Title
                                <div className="modal-title">
                                        <input type="text"
                                            value={this.state.category}
                                            onChange={this.update('category')}
                                            placeholder="Describe your expense"
                                        />
                                    </div>
                                </label>

                                <br />

                                <label>Amount
                                <div className="modal-amt">
                                        <input type="text"
                                            value={this.state.amount}
                                            onChange={this.update('amount')}
                                            placeholder="Enter cost"
                                        />
                                    </div>
                                </label>

                                <br />

                                <label>Date
                                <div className="modal-date">
                                        <input type="text"
                                            value={this.state.date}
                                            onChange={this.update('date')}
                                            placeholder="08/17/1999"
                                        />
                                    </div>
                                </label>

                                <div className="modal-button">
                                    <input type="submit" value="Submit" />
                                </div>
                            </div>
                        </form>
                        <br />
                    </div>

                </div>
            </div>
        );
    }
}


export default withRouter(ExpenseForm);