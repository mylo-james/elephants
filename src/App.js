import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EleProvider from './contexts/EleProvider';
import Home from './scenes/Home/Home';
import Missing from './scenes/Missing/Missing';

const App = () => (
    <BrowserRouter>
        <EleProvider>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/" component={Missing} />
            </Switch>
        </EleProvider>
    </BrowserRouter>
);
export default App;
