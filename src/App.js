import HoMe from './pages/hoMe.coMponent/hoMe.coMponent'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Shop from './coMponents/shop.coMponent/shop.coMponent';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HoMe}/>
        <Route exact path="/shop" component={Shop}/>
      </Switch>
    </div>
  );
}

export default App;
