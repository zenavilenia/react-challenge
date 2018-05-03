import React from 'react'
import {Link} from 'react-router-dom';

class NavbarCategory extends React.Component {
  render () {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/us" onClick={ () => this.props.getNewsArs('ars-technica') }>
                <span>
                  US
                </span>
            </Link>
          </li>
          <li>
            <Link to="/kr" onClick={ () => this.props.getNewsArs('ign') }>
                <span>
                  KR
                </span>
            </Link>
          </li>
          <li>
            <Link to="/hk" onClick={ () => this.props.getNewsArs('reddit-r-all') }>
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
