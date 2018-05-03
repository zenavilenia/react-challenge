import React from 'react'
import {Link} from 'react-router-dom';
import './Home.css';

class NavbarCategory extends React.Component {
  render () {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/us">
                <span>
                  US
                </span>
            </Link>
          </li>
          <li>
            <Link to="/kr">
                <span>
                  KR
                </span>
            </Link>
          </li>
          <li>
            <Link to="/hk">
                <span>
                  HK
                </span>
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default NavbarCategory;
