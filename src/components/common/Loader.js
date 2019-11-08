import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import "./common.css";

class Loader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false
          }
        }


    componentWillReceiveProps(next) {
        let { loadingState: {loading} } = next;
        if (loading !== null && loading !== undefined && this.state.loading !== loading) {
          this.setState({loading});
        }
    }

    render() {
        return (
            this.state.loading ?
            <Fragment>
                <div className="loader">
                    <CircularProgress color="secondary" />
                </div>
                <Backdrop style={{zIndex: 1}} open={true} />
            </Fragment> : null

            
        );
    }
}

const mapStateToProps = state => ({
    userState: state.user,
    loadingState: state.loading
  });
  
  export default connect(mapStateToProps, {  })(Loader);
  

