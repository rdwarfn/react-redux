import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions'

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }

        this.onSubmits = this.onSubmits.bind(this)
        this.onChanges = this.onChanges.bind(this)
    }

    onSubmits(e) {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        }

        // Call Action
        this.props.createPost(post);
    }

    onChanges(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmits} >
                    <label htmlFor="title">Title: </label>
                    <br />
                    <input onChange={this.onChanges} name="title" type="text" value={this.state.title} />
                    <br />
                    <label htmlFor="body">Body :</label>
                    <br />
                    <textarea onChange={this.onChanges} name="body" value={this.state.body} />
                    <br />

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(PostForm);
