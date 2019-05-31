import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../index.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Product from './Product'

class Login extends Component {

    constructor(props) {
        super(props);
    };

    //Ini belulm dipakai
    handleSubmit = (event) => {
        event.preventDefault();
        const title = this.getTitle.value;
        const message =  this.getMessage.value;

        const data = {
            id: new Date(),
            title,
            message,
            editing:false
        };
        this.props.dispatch({
            type:'ADD_POST',
            data});
        this.getTitle.value = '';
        this.getMessage.value = '';
    };

    render() {
        return (
            <Router>
                <div className="userLogin">
                    <h1>Login</h1>
                    <form>
                        <input required type="text" placeholder="Enter Your Username"/>
                        <br /><br />
                        <input placeholder="Enter Your Password" />
                        <br /><br />
                        <Link to={'/product'} className="nav-link"><button>Login</button></Link>
                    </form>
                </div>
                <Switch>
                    <Route exact path='/product' component={Product} />
                </Switch>
            </Router>
        );
    }
}
export default connect()(Login);