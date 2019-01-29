import React, { Component } from 'react';
import './HOCLoader.css';
const LoaderHOC = (WrappedComponent) => {
  class HOC extends Component {

    isLoading = () => {
      const { loading } = this.props;

      if(loading === null || loading) {
        return true;
      }
      return false;
    }

    render() {
      return this.isLoading() ? <h1 className="loader">Loader!</h1> : <WrappedComponent {...this.props} />
    }    
  }
  return HOC;
}

export default LoaderHOC;