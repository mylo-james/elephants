import EleForm from './components/EleForm';
import ElePhoto from './components/ElePhoto';
function Home() {
    return (
        <div className="app">
            <h1>ELEPHANTS!</h1>
            <EleForm />
            <ElePhoto />
        </div>
    );
}
export default Home;
