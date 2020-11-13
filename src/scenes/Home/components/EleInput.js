import EleConsumer from '../../../contexts/EleConsumer';
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

export default EleConsumer(EleInput);
