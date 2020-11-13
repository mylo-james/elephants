import { EleContext } from './EleProvider';

function EleConsumer(Component) {
    return (props) => (
        <EleContext.Consumer>
            {(value) => <Component {...props} {...value} />}
        </EleContext.Consumer>
    );
}

export default EleConsumer;
