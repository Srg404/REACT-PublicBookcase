import './app.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/home/home';
import AboutPage from './pages/about/about';
import Navigation from './components/navigation/navigation';
import ErrorPage from './pages/error/error';

function App() {
  return (
    <div id="app" className="App">
        <Router>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route>
              <ErrorPage />
            </Route>
            <Navigation />
        </Router>
    </div>
  );
}

export default App;
