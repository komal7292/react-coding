import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {lat: null, long: null}
    window.navigator.geolocation.getCurrentPosition(
      position => {
        // We called setState!!!
        this.setState({ lat: position.coords.latitude})
        this.setState({ long: position.coords.longitude})
        console.log(position)
      },
      err => console.log(err)
    )
  }

  render(){
    return(
      <div>
        latitude: {this.state.lat}
        longitude: {this.state.long}
      </div>
    ) 
  }
}

ReactDOM.render(<App />,document.querySelector("#root"));
