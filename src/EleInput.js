import { EleContext } from './EleContext';
function EleInput({ pic }) {
    return (
        <EleContext.Consumer>
            {({ setElePhoto }) => (
                <label>
                    {pic.name}
                    <input
                        onClick={(e) => setElePhoto(e)}
                        type="radio"
                        name="elephants"
                        value={pic.url}
                    />
                </label>
            )}
        </EleContext.Consumer>
    );
}

export default EleInput;
