import React, { Component } from 'react';
import { connect } from "react-redux";
import Card from "../../components/common/Card";
import Container from "../../components/common/Container";
import { toast } from "react-toastify";
import { getPosts } from "../../actions/post";
import { msg } from "../../actions/global";

import "./Post.css";


class Post extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            posts: props.postState.posts  
        }
        this.searchState =  ""
    }


    componentWillReceiveProps(next) {
        let { postState: {posts}, search } = next;
        this.setState({ posts });

        if (this.searchState !== search) {
            let filterCategory = this.state.posts.filter(p => (p.category || "").includes(this.props.search));
            let filterTitle = this.state.posts.filter(p => (p.title || "").includes(this.props.search));
            let aux = {...this.state};
            aux.posts = [...filterTitle, ...filterCategory];
            this.setState({posts: aux.posts});
        }
    }

    componentDidMount() {
        if (!this.props.postState || !this.props.postState.posts || !this.props.postState.posts.length) this.props.getPosts();
    }

    showPost = post => {
        if (post._id) {
            return this.props.history.push(`/posts/${post._id}`);
        }
        return msg({type: "warning", message: "Could not find this post ID on my database!"});
    };

    render() {
        return (
            <div>
                {
                    this.state.posts instanceof Array && this.state.posts.length > 0 ?
                        <div className="gridSystem">

                            {
                                this.state.posts.map(post => {
                                    return (
                                        <div onClick={() => this.showPost(post)} className="card">
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


const mapStateToProps = state => ({
    userState: state.user,
    postState: state.post
});

export default connect(mapStateToProps, { getPosts, msg })(Post);
