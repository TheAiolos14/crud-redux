import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../index.css';

class Product extends Component {

    constructor(props) {
        super(props);
        this.props.dispatch({
            type:'ADD_POST'});
    };

    render() {
        return (
            <div className="productPage">
                <h2>Halo Cuk </h2>
            </div>
        );
    }
}
export default connect()(Product);