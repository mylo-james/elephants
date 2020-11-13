import { EleContext } from './EleContext';
function EleInput({ pic, setElePhoto }) {
    return (
        <label>
            {pic.name}
            <input
                onClick={(e) => setElePhoto(e)}
                type="radio"
                name="elephants"
                value={pic.url}
            />
        </label>
    );
}

const EleInputWithContext = ({ pic }) => {
    return (
        <EleContext.Consumer>
            {({ setElePhoto }) => (
                <EleInput pic={pic} setElePhoto={setElePhoto} />
            )}
        </EleContext.Consumer>
    );
};

export default EleInputWithContext;
