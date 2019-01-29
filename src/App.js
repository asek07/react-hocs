import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoadingComponent from './LoadingComponent'

class App extends Component {

  constructor(props) {
    super();

    setTimeout(() => {
      this.setState({ loading: false })
    }, 2000)
  }

  componentWillMount() {
    this.setState({ loading: true })
  }

  render() {
    const { loading } = this.state;

    return (
      <div className="App">
        <LoadingComponent loading={loading}/>
      </div>
    );
  }
}

export default App;
