import './app.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home/home';
import AboutPage from './pages/about/about';
import Navigation from './components/navigation/navigation';
import ErrorPage from './pages/error/error';
import MapPage from './pages/map/map';
import Parse from 'parse/dist/parse.min.js';
import { parseApplicationId, parseJavascriptId  } from './utils/keys'

const PARSE_APPLICATION_ID = parseApplicationId;
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = parseJavascriptId;
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

function App() {
  return (
    <div id="app" className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/map">
            <MapPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
        <Navigation />
      </Router>
    </div>
  );
}

export default App;
