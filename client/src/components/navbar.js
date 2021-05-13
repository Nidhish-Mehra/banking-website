import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar-fixed">
        <nav className="black text-white">
          <div className="nav-wrapper container">
          <a href="/" className="brand-logo">GRIP</a>         
            <ul className="right">
                {/* <li><Link to="/register">Register</Link></li> */}
                <li><Link to="/allUsers">All Users</Link></li>
                <li><a href="/transfer">Transfer</a></li>
                <li><Link to="/allTransactions">Transactions</Link></li>
            </ul>
          </div>
        </nav>
    </div>
  );
}

export default Navbar;