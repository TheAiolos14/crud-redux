import React, { Component } from 'react';
import {connect} from 'react-redux';
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AllPost from './AllPost'

class PostForm extends Component {

    constructor(props) {
        super(props);
        this.state = {file: '',imagePreviewUrl: ''};
    };

    handleImageChange(event) {
        event.preventDefault();

        let reader = new FileReader();
        let file = event.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        };
        reader.readAsDataURL(file)
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const title = this.getTitle.value;
        const message =  this.getMessage.value;
        const image = this.getImage.value;

        const data = {
            id: new Date(),
            title,
            message,
            image,
            editing:false
        };
        this.props.dispatch({
            type:'ADD_POST',
            data});
        this.getTitle.value = '';
        this.getMessage.value = '';
        this.getImage.value = "";
    };

    render() {

        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} />);
        } else {
            $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }

        return (
            <Router>
                <div className="postForm">
                    <h1>Create Article</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input required type="text" ref={(input)=>this.getTitle = input}
                               placeholder="Enter Post Title"/>
                        <br /><br />
                        <textarea required rows="5" ref={(input)=>this.getMessage = input} cols="28"
                                  placeholder="Enter Post" />
                        <br /><br />

                        <div className="previewComponent">
                            <form>
                                <input className="fileInput"
                                       type="file"
                                       onChange={(e)=>this.handleImageChange(e)}
                                       ref={(input)=>this.getImage = input}/>
                            </form>
                        </div>

                        <br />
                        <button>Post</button>
                    </form>

                    <div className="imgPreview">
                        {$imagePreview}
                    </div>

                    <div>
                        <button><Link to={'/allPost'} className="nav-link"> All Post </Link></button>
                    </div>

                    <Switch>
                        <Route exact path='/allPost' component={AllPost} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default connect()(PostForm);