import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';

class EditComponent extends Component {

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

    handleEdit = (event) => {
        event.preventDefault();
        const newTitle = this.getTitle.value;
        const newMessage = this.getMessage.value;
        const newImage = this.getImage.value;

        const data = {
            newTitle,
            newMessage,
            newImage
        };

        this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
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
            <div>
                <form onSubmit={this.handleEdit}>
                    <input required type="text" ref={(input) => this.getTitle = input}
                           defaultValue={this.props.post.title} placeholder="Enter Post Title" /><br /><br />
                    <textarea required rows="5" ref={(input) => this.getMessage = input}
                              defaultValue={this.props.post.message} cols="28" placeholder="Enter Post" /><br /><br />
                    <br /><br />

                    <div className="previewComponent">
                        <form>
                            <input className="fileInput"
                                   type="file"
                                   onChange={(e)=>this.handleImageChange(e)}
                                   ref={(input)=>this.getImage = input}/>
                        </form>
                    </div>

                    <button className="update">Update</button>
                </form>

                <div className="imgPreview">
                    {$imagePreview}
                </div>

            </div>
        );
    }
}
export default connect()(EditComponent);