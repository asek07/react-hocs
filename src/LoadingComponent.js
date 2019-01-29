import React, {Component} from 'react';
import LoaderHOC from './HOC/LoaderHOC';
import './App.css';

class LoadingComponent extends Component {

  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <h1 className="app-text">The data is now loaded!</h1>
      </div>
    )
  }
}

export default LoaderHOC(LoadingComponent);
