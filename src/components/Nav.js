import { React } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <div className="nav_container">
      <header className="nav_header">
        <h1>Math Magicians</h1>
        <nav className="nav_list">

          <li>
            <Link to="/" className="nav_anchor td_none">Home </Link>
          </li>
          <li className="border_active">
            <Link to="/Calculator" className="nav_anchor  td_none">Calculator</Link>
          </li>
          <li>
            <Link to="/Quote" className="nav_anchor td_none">Quote</Link>
          </li>
        </nav>

      </header>

    </div>
  );
}

export default Nav;
