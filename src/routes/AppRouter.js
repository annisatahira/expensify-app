import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from '../components/Header'
import ExpenseDashboardPage from '../components/ExpenseDashboard'
import AddExpensePage from '../components/AddExpense'
import EditExpensePage from '../components/EditExpense'
import HelpExpensePage from '../components/HelpExpense'
import NotFoundPage from '../components/NotFound'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter
