import React from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './Home.css';
import { getNews } from '../store/news/action'

class NavbarCategory extends React.Component {
  changeLanguage(country) {
    this.props.getNews(country)
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('iduser');
  }
  
  render () {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/us" onClick={ this.changeLanguage.bind(this, 'us') }>
                <span>
                  US
                </span>
            </Link>
          </li>
          <li>
            <Link to="/kr" onClick={ this.changeLanguage.bind(this, 'kr') }>
                <span>
                  KR
                </span>
            </Link>
          </li>
          <li>
            <Link to="/hk" onClick={ this.changeLanguage.bind(this, 'hk') }>
                <span>
                  HK
                </span>
            </Link>
          </li>
          <li class="right">
            <Link to="/login" onClick={ this.logout.bind(this, null) }>
              <span>
                Logout
              </span>
            </Link>
          </li>
          <li class="right">
            <Link to="/myfavorite">
                <span>
                  My Favorite
                </span>
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getNews
}, dispatch)

export default connect(null, mapDispatchToProps)(NavbarCategory);