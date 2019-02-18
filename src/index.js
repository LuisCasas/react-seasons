import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './components/SeasonDisplay';

class App extends React.Component{

    state = {
        lat: null,
        error: ''
    };  

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition((position) => {
            this.setState({ lat: position.coords.latitude });
        }, (error) => {
            this.setState({ error: error.message})
        }); 
    }

    render(){

        if(this.state.error && !this.state.lat){
            return <div>Error: {this.state.error}</div>
        }

        if(!this.state.error && this.state.lat){
            return <SeasonDisplay lat={this.state.lat} /> //<div>Latitude: {this.state.lat}</div>
        }   

        return <div>Loading...</div>
    };
}

ReactDOM.render(<App />, document.getElementById('root'));

