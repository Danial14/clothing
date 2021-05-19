import HoMe from './pages/hoMe.coMponent/hoMe.coMponent'
import './App.css';
import { Route, Switch } from 'react-router-dom';

const HatsPage = () => (
  <h1>Hats</h1>
)

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HoMe}/>
        <Route exact path="/hats" component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
