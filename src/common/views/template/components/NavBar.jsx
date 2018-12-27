import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/navbar.css';
import routes from '../../../routes';


class NavBar extends Component {
  render() {
    return (
      <div className = 'nav-wrapper'>
        <nav className = 'nav-bar max-width'>
          { routes.routes.map(each => 
              <Link key = { each.path } to = { each.path }> 
                { each.title } 
              </Link> ) }
        </nav>
      </div>
    )
  }
}

export default NavBar;
