import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";

import ExpensesContainer from './expenses/expenses_container'

import ExpenseFormContainer from './expenses/expense_form_container'


import MainPage from "./main/main_page";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";

import Modal from '../components/modal/modal';

const App = () => (
  <div>
    <NavBarContainer />
      <Modal/>
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <ProtectedRoute exact path="/addexpense" component={ExpenseFormContainer} />
      <ProtectedRoute exact path="/expenses" component={ExpensesContainer} />
    </Switch>
  </div>
);

export default App;
