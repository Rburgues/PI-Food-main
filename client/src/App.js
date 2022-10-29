import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Home from './components/Home/Home.jsx';
import './App.css';

function App() {
  return (
   
<Router>
      <div className="App">
        <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        </Switch>
      </div>
    </Router>



     
  );
}

export default App;
