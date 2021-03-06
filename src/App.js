import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/UI/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import Deals from './components/Deals';

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/deals" component={Deals} />
    </Router>
  );
}

export default App;
