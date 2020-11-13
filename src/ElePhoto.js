import { EleContext } from './EleContext';
function ElePhoto() {
    return (
        <EleContext.Consumer>
            {({ elePhoto }) => (
                <div className="eleWrapper">
                    {elePhoto ? (
                        <img src={elePhoto} alt="an elephant" />
                    ) : (
                        <p>Pick an Elephant!</p>
                    )}
                </div>
            )}
        </EleContext.Consumer>
    );
}

export default ElePhoto;
