import React, { Component } from "react";
import { Post } from "./requests";
import PostForm from "./PostForm";

class PostNewPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errors: []
        };

        this.createPost = this.createPost.bind(this);
    }

    createPost(params) {

        Post.create(params).then(data => {

            if (data.errors) {

                this.setState({
                    errors: data.errors
                });
            } else {
                this.props.history.push(`/Posts/${data.id}`);
            }
        });
    }

    render() {
        const { errors = [] } = this.state;

        return (
            <main>
                <h1>Submit post</h1>

                <PostForm errors={errors} onSubmit={this.createPost} />
            </main>
        );
    }
}

export default PostNewPage;
