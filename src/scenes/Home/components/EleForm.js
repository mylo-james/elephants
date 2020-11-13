import EleInput from './EleInput';
import EleConsumer from '../../../contexts/EleConsumer';
const EleForm = ({ pics }) => {
    return (
        <form>
            {pics.map((pic) => (
                <EleInput key={pic.name} pic={pic} />
            ))}
        </form>
    );
};
export default EleConsumer(EleForm);
