import MissingPhoto from './components/MissingPhoto';
import MissingForm from './components/MissingForm';
function Missing(props) {
    return (
        <div className="app">
            <h1>You look lost...</h1>
            <MissingForm />
            
            <MissingPhoto />
        </div>
    );
}

export default Missing;
