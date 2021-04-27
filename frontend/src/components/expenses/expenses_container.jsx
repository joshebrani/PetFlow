import { connect } from 'react-redux';
import { fetchExpenses, deleteExpense } from '../../actions/expense_actions'
import Expenses from './expenses';
import { openModal, closeModal } from "../../actions/modal_actions";


const mapStateToProps = (state, ownProps) => {

    return {
        state: state
        // expenses: Object.values(state.expenses.all)
    };
};

const mapDispatchToProps = dispatch => {
    return {
      fetchExpenses: () => dispatch(fetchExpenses()),
      openModal: (modal) => dispatch(openModal(modal)),
      closeModal: () => dispatch(closeModal()),
      deleteExpense: (id) => dispatch(deleteExpense(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
