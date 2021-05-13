
import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from './components/navbar'
import Register from './components/register'
import AllUsers from './components/allUsers'
import Transfer from './components/transfer';
import AllTransactions from './components/allTransaction';
import Home from './components/home';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Navbar />
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/allUsers">
              <AllUsers />
            </Route>
            <Route path="/transfer">
              <Transfer />
            </Route>
            <Route path="/allTransactions">
              <AllTransactions />
            </Route>
      </BrowserRouter>

    </div>
  );
}

export default App;
