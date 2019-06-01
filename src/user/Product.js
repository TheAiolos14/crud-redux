import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../index.css';
import image2 from '../image.jpg'

class Product extends Component {

    constructor(props) {
        super(props);
        this.props.dispatch({
            type:'ADD_POST'});
    };

    render() {
        return (
            <div className="productPage">
                <h2>List of Product</h2>
                <div>
                    <div className="productContent">
                        <h4 className="titleProduct">Product A </h4>
                        <img src={image2} className="imgProduct" />
                        <button className="buy">Buy</button>
                    </div>

                    <div className="productContent">
                        <h4 className="titleProduct">Product B </h4>
                        <img src={image2} className="imgProduct" />
                        <button className="buy">Buy</button>
                    </div>

                    <div className="productContent">
                        <h4 className="titleProduct">Product C </h4>
                        <img src={image2} className="imgProduct" />
                        <button className="buy">Buy</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect()(Product);