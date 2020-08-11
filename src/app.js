import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const ExpenseDashboardPage = () => <div>This is from my Dashboard</div>

const AddExpensePage = () => <div>This is create page</div>

const EditExpensePage = () => <div>This is edit page</div>

const HelpExpensePage = () => (
  <div>this is help page</div>
)

const NotFoundPage = () => (
    <div>
        404!
    </div>
)

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpExpensePage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'))
