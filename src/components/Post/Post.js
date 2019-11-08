import React, { Component } from 'react';
import { connect } from "react-redux";
import Card from "../../components/common/Card";
import Container from "../../components/common/Container";
import { toast } from "react-toastify";
import { getPosts } from "../../actions/post";

import "./Post.css";


class Post extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            posts: props.posts || ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in maximus nisl, nec laoreet nulla. Sed hendrerit, eros ut ornare rhoncus, mi nibh aliquet est, eget gravida risus metus eget orci. Phasellus pellentesque viverra vehicula. Curabitur malesuada efficitur pharetra. Fusce at augue vitae neque dapibus pellentesque. Morbi eros nunc, facilisis in tellus a, sodales finibus lorem. Praesent turpis eros, eleifend eget venenatis eu, dapibus quis tellus. Nam aliquet, quam ut faucibus placerat, lacus urna varius libero, nec hendrerit nisl tortor a ante. Fusce laoreet hendrerit leo eget auctor. Duis purus leo, faucibus malesuada eleifend ac, rhoncus in ex.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in maximus nisl, nec laoreet nulla. Sed hendrerit, eros ut ornare rhoncus, mi nibh aliquet est, eget gravida risus metus eget orci. Phasellus pellentesque viverra vehicula. Curabitur malesuada efficitur pharetra. Fusce at augue vitae neque dapibus pellentesque. Morbi eros nunc, facilisis in tellus a, sodales finibus lorem. Praesent turpis eros, eleifend eget venenatis eu, dapibus quis tellus. Nam aliquet, quam ut faucibus placerat, lacus urna varius libero, nec hendrerit nisl tortor a ante. Fusce laoreet hendrerit leo eget auctor. Duis purus leo, faucibus malesuada eleifend ac, rhoncus in ex.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in maximus nisl, nec laoreet nulla. Sed hendrerit, eros ut ornare rhoncus, mi nibh aliquet est, eget gravida risus metus eget orci. Phasellus pellentesque viverra vehicula. Curabitur malesuada efficitur pharetra. Fusce at augue vitae neque dapibus pellentesque. Morbi eros nunc, facilisis in tellus a, sodales finibus lorem. Praesent turpis eros, eleifend eget venenatis eu, dapibus quis tellus. Nam aliquet, quam ut faucibus placerat, lacus urna varius libero, nec hendrerit nisl tortor a ante. Fusce laoreet hendrerit leo eget auctor. Duis purus leo, faucibus malesuada eleifend ac, rhoncus in ex.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in maximus nisl, nec laoreet nulla. Sed hendrerit, eros ut ornare rhoncus, mi nibh aliquet est, eget gravida risus metus eget orci. Phasellus pellentesque viverra vehicula. Curabitur malesuada efficitur pharetra. Fusce at augue vitae neque dapibus pellentesque. Morbi eros nunc, facilisis in tellus a, sodales finibus lorem. Praesent turpis eros, eleifend eget venenatis eu, dapibus quis tellus. Nam aliquet, quam ut faucibus placerat, lacus urna varius libero, nec hendrerit nisl tortor a ante. Fusce laoreet hendrerit leo eget auctor. Duis purus leo, faucibus malesuada eleifend ac, rhoncus in ex.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in maximus nisl, nec laoreet nulla. Sed hendrerit, eros ut ornare rhoncus, mi nibh aliquet est, eget gravida risus metus eget orci. Phasellus pellentesque viverra vehicula. Curabitur malesuada efficitur pharetra. Fusce at augue vitae neque dapibus pellentesque. Morbi eros nunc, facilisis in tellus a, sodales finibus lorem. Praesent turpis eros, eleifend eget venenatis eu, dapibus quis tellus. Nam aliquet, quam ut faucibus placerat, lacus urna varius libero, nec hendrerit nisl tortor a ante. Fusce laoreet hendrerit leo eget auctor. Duis purus leo, faucibus malesuada eleifend ac, rhoncus in ex.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in maximus nisl, nec laoreet nulla. Sed hendrerit, eros ut ornare rhoncus, mi nibh aliquet est, eget gravida risus metus eget orci. Phasellus pellentesque viverra vehicula. Curabitur malesuada efficitur pharetra. Fusce at augue vitae neque dapibus pellentesque. Morbi eros nunc, facilisis in tellus a, sodales finibus lorem. Praesent turpis eros, eleifend eget venenatis eu, dapibus quis tellus. Nam aliquet, quam ut faucibus placerat, lacus urna varius libero, nec hendrerit nisl tortor a ante. Fusce laoreet hendrerit leo eget auctor. Duis purus leo, faucibus malesuada eleifend ac, rhoncus in ex.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in maximus nisl, nec laoreet nulla. Sed hendrerit, eros ut ornare rhoncus, mi nibh aliquet est, eget gravida risus metus eget orci. Phasellus pellentesque viverra vehicula. Curabitur malesuada efficitur pharetra. Fusce at augue vitae neque dapibus pellentesque. Morbi eros nunc, facilisis in tellus a, sodales finibus lorem. Praesent turpis eros, eleifend eget venenatis eu, dapibus quis tellus. Nam aliquet, quam ut faucibus placerat, lacus urna varius libero, nec hendrerit nisl tortor a ante. Fusce laoreet hendrerit leo eget auctor. Duis purus leo, faucibus malesuada eleifend ac, rhoncus in ex.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in maximus nisl, nec laoreet nulla. Sed hendrerit, eros ut ornare rhoncus, mi nibh aliquet est, eget gravida risus metus eget orci. Phasellus pellentesque viverra vehicula. Curabitur malesuada efficitur pharetra. Fusce at augue vitae neque dapibus pellentesque. Morbi eros nunc, facilisis in tellus a, sodales finibus lorem. Praesent turpis eros, eleifend eget venenatis eu, dapibus quis tellus. Nam aliquet, quam ut faucibus placerat, lacus urna varius libero, nec hendrerit nisl tortor a ante. Fusce laoreet hendrerit leo eget auctor. Duis purus leo, faucibus malesuada eleifend ac, rhoncus in ex.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in maximus nisl, nec laoreet nulla. Sed hendrerit, eros ut ornare rhoncus, mi nibh aliquet est, eget gravida risus metus eget orci. Phasellus pellentesque viverra vehicula. Curabitur malesuada efficitur pharetra. Fusce at augue vitae neque dapibus pellentesque. Morbi eros nunc, facilisis in tellus a, sodales finibus lorem. Praesent turpis eros, eleifend eget venenatis eu, dapibus quis tellus. Nam aliquet, quam ut faucibus placerat, lacus urna varius libero, nec hendrerit nisl tortor a ante. Fusce laoreet hendrerit leo eget auctor. Duis purus leo, faucibus malesuada eleifend ac, rhoncus in ex.",
       
           ]
        }
    }


    componentWillReceiveProps(next) {
        let { posts } = next;
        this.setState({ posts });
    }

    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        return (
            <div>
                {
                    this.state.posts instanceof Array && this.state.posts.length > 0 ?
                        <div className="gridSystem">

                            {
                                this.state.posts.map(post => {
                                    return (
                                        <div className="card">
                                            <Card onClickNav={this.onClickNav} post={post} />
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
    user: state.user
});

export default connect(mapStateToProps, { getPosts })(Post);
