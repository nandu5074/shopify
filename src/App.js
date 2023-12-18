import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import Sellers from './Components/Sellers/Sellers';
import Brands from './Components/Brands/Brands';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <div>
      <Router>
        <Route path='/' exact component={Homepage} />
        <Route path='/sellers' component={Sellers} />
        <Route path='/brands' component={Brands} />
        <Route path='/cart' component={Cart}/>
      </Router>
    </div>
  );
}

export default App;
