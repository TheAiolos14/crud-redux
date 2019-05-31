import React, { Component } from 'react';
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Login from './user/Login'
import AdminLogin from './admin/Login'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="navbar">
                        <h2 className="center">Blabla.com</h2>
                        <div className="navbarProfile">
                            <ul>
                                <li className="adminButton"><Link to={'/admin'} className="nav-link"> <span style={{color: 'white'}}>Admin</span></Link></li>
                                <li className="userButton"><Link to={'/user'} className="nav-link"> <span style={{color: 'white'}}>User</span> </Link></li>
                            </ul>
                        </div>
                    </div>
                    <Switch>
                        <Route exact path='/admin' component={AdminLogin} />
                        <Route exact path='/user' component={Login} />
                        <Route exact path='/' component={Login} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default App;