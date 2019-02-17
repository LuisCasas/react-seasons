import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            lat: null,
            error: ''
        };

        window.navigator.geolocation.getCurrentPosition((position) => {
            this.setState({ lat: position.coords.latitude });
        }, (error) => {
            this.setState({ error: error.message})
        });       
    };

    render(){

        if(this.state.error && !this.state.lat){
            return <div>Error: {this.state.error}</div>
        }

        if(!this.state.error && this.state.lat){
            return <div>Latitude: {this.state.lat}</div>
        }   

        return <div>Loading...</div>
    };
}

ReactDOM.render(<App />, document.getElementById('root'));

