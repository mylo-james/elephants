import EleInputWithContext from './EleInput';
import { EleContext } from './EleContext';
function EleForm({ pics }) {
    return (
        <form>
            {pics.map((pic) => (
                <EleInputWithContext key={pic.name} pic={pic} />
            ))}
        </form>
    );
}

const EleFormWithContext = () => {
    return (
        <EleContext.Consumer>
            {({ pics }) => <EleForm pics={pics} />}
        </EleContext.Consumer>
    );
};
export default EleFormWithContext;
