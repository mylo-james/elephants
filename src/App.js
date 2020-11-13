//import for Class Component
import { Component } from 'react';
//image imports
import stuck from './elephants/stuck.jpg';
import stick from './elephants/stick.jpg';
import suck from './elephants/suck.jpg';

//component imports
import EleForm from './EleForm';
import ElePhoto from './ElePhoto';
import { EleContext } from './EleContext';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elePhoto: '',
            setElePhoto: this.setElePhoto,
            pics: [
                { name: 'Stuck', url: stuck },
                { name: 'Stick', url: stick },
                { name: 'Suck', url: suck },
            ],
        };
    }

    //Method to set elePhoto
    setElePhoto = ({ target: { value } }) => {
        this.setState({ elePhoto: value });
    };

    render() {
        return (
            <EleContext.Provider value={this.state}>
                <div className="app">
                    <h1>ELEPHANTS!</h1>
                    <EleForm />
                    <ElePhoto />
                </div>
            </EleContext.Provider>
        );
    }
}

export default App;
