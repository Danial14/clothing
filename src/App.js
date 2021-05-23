import HoMe from './pages/hoMe.coMponent/hoMe.coMponent'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Shop from './coMponents/shop.coMponent/shop.coMponent';
import Header from './coMponents/header.coMponent/header.coMponent';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={HoMe}/>
        <Route exact path="/shop" component={Shop}/>
      </Switch>
    </div>
  );
}

export default App;
