import { React } from 'react';
import { Link } from 'react-router-dom';
import '../css/Nav.css';
import profileImg from '../img/user.jpg';

function Nav() {
  return (
    <div className="app_container">
      <header className="navigation_container nav_position">
        <nav className="nav_tag nav_position nav_gap">
          <h1>BookStore CMS</h1>
          <ul className="nav_list nav_position nav_gap">
            <li>
              <Link to="/" className="nav_anchor td_none">Books </Link>
            </li>

            <li>
              <Link to="/category" className="nav_anchor td_none">Category </Link>
            </li>
          </ul>
        </nav>
        <figure className="profile_figure_tag">
          <img className="profile_icon" src={profileImg} alt="" />
        </figure>
      </header>
    </div>
  );
}

export default Nav;
