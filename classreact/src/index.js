import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'

class App extends Component {
  state = {lat: null, long: null, errorMessage: '' }
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude})
        this.setState({ long: position.coords.longitude})
      },
      err => this.setState({ errorMessage: err.message })
    )
  }

  render() {
    if(this.state.errorMessage){
      return <div>Error: { this.state.errorMessage }</div>
    }

    if(!(this.state.errorMessage) && (this.state.lat  && this.state.long)){
      return(
        <div>
          <SeasonDisplay lat={this.state.lat} />
          <SeasonDisplay long={this.state.long} />
        </div>
      )
    }

    return <div>Loading!!</div>
  }
}

ReactDOM.render(<App />,document.querySelector("#root"));
