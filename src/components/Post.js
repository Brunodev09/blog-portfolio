import React, { Component } from 'react';
import Card from "../components/common/Card";
import Container from "../components/common/Container";


export default class Post extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: props.posts || ""
        }
    }

    componentWillReceiveProps(next) {
        let { posts } = next;
        this.setState({ posts });
    }

    render() {
        return (
            <div>
                {
                    this.state.posts instanceof Array && this.state.posts.length > 0 ?
                        <div>

                            {
                                this.state.posts.map(post => {
                                    return (
                                        <div style={{ marginLeft: "38%" }}>
                                            <Card post={post} />
                                        </div>
                                    );
                                })
                            }

                        </div> : null
                }
            </div>
        );
    }
}



