import './app.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home/home';
import AboutPage from './pages/about/about';
import Navigation from './components/navigation/navigation';
import ErrorPage from './pages/error/error';
import MapPage from './pages/map/map';

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
