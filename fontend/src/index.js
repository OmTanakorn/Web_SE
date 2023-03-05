import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './style.css'
import Register from './views/register'
import Login from './views/login'
import Home from './views/home'
import Course from './views/course'
import Mycourse from './views/my-course'
import Buycourse from './views/buycourses'
import Topup from './views/top-up'
import Setting from './views/setting'
import Global from './views/global-notification-box'
import axios from 'axios';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Login} exact path="/" />
        <Route component={Register} exact path="/register" />
        <Route component={Home} exact path="/home" />
        <Route component={Course} exact path="/course" />
        <Route component={Mycourse} exact path="/mycourse" />
        <Route component={Buycourse} exact path="/buycourse" />
        <Route component={Topup} exact path="/topup" />
        <Route component={Global} exact path="/global" />
        <Route component={Setting} exact path="/setting" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
