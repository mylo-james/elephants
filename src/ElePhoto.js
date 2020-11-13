import { Component } from 'react';
import { EleContext } from './EleContext';
class ElePhoto extends Component {
    static contextType = EleContext;
    render() {
        const { elePhoto } = this.context;
        return (
            <div className="eleWrapper">
                {elePhoto ? (
                    <img src={elePhoto} alt="an elephant" />
                ) : (
                    <p>Pick an Elephant!</p>
                )}
            </div>
        );
    }
}
export default ElePhoto;
