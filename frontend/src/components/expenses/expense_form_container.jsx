import { connect } from 'react-redux';
import { createExpense } from '../../actions/expense_actions';
import ExpenseForm from './expense_form';
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {

    return {
        state: state,
        ownProps: ownProps
    };
};

const mapDispatchToProps = dispatch => {
    return {
      createExpense: (data) => dispatch(createExpense(data)),
      openModal: (modal) => dispatch(openModal(modal)),
      closeModal: () => dispatch(closeModal()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
