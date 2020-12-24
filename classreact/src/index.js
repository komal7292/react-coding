import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props){
    super(props)

    this.state = { lat: null, long: null, errorMessage: "" }
    window.navigator.geolocation.getCurrentPosition(
      position => {
        // We called setState!!!
        this.setState({ lat: position.coords.latitude})
        this.setState({ long: position.coords.longitude})
        // console.log(position)
      },
      err => {
        this.setState({ errorMessage: err.message })
      }
    )
  }

  render() {
    if(this.state.errorMessage && !(this.state.lat && this.state.long)){
      return <div>Error: { this.state.errorMesasge }</div>
    }

    if(!(this.state.errorMessage) && (this.state.lat  && this.state.long)){
      return(
        <div>
          Latitude: { this.state.lat }
          <br />
          Longitude:{ this.state.long }
        </div>
      )
    }

    return <div>Loading!!</div>
  }
}

ReactDOM.render(<App />,document.querySelector("#root"));
