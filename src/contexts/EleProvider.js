import { createContext, Component } from 'react';

//image imports
import stuck from '../elephants/stuck.jpg';
import stick from '../elephants/stick.jpg';
import suck from '../elephants/suck.jpg';

export const EleContext = createContext('app');

class EleProvider extends Component {
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
                {this.props.children}
            </EleContext.Provider>
        );
    }
}

export default EleProvider;
