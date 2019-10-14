import React, { Component } from 'react';
import Container from './common/Container';

export default class Post extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: props.posts || ""
        }
    }

    componentWillReceiveProps(next) {
        let { posts } = next;
        this.setState({posts});
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
                                            <p>{post}</p>
                                    );
                                })
                            }
                        </div> : null
                }
            </div>
        );
    }
}
