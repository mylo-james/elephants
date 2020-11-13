import EleInput from './EleInput';
import { EleContext } from './EleContext';
function EleForm() {
    return (
        <EleContext.Consumer>
            {({ pics }) => (
                <form>
                    {pics.map((pic) => (
                        <EleInput key={pic.name} pic={pic} />
                    ))}
                </form>
            )}
        </EleContext.Consumer>
    );
}
export default EleForm;
