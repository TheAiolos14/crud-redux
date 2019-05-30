import React, { Component } from 'react';
import {connect} from 'react-redux';
import './index.css';

class Post extends Component {
    render() {
        return (
            <div className="postContent">
                <h2>{this.props.post.title}</h2>
                <p>{this.props.post.message}</p>
                <button
                    onClick={()=>this.props.dispatch({type:'EDIT_POST',id:this.props.post.id})} className="edit">
                    Edit</button>
                <button
                    onClick={()=>this.props.dispatch({type:'DELETE_POST',id:this.props.post.id})} className="delete">
                    Delete</button>
            </div>
        );
    }
}
export default connect()(Post);