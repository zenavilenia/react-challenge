import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';

import './Articles.css';
import { addNews } from '../store/user/action'

class Articles extends Component {
  constructor() {
    super();
      this.state = {
    }
  }

  render() {
    return (
      <div> 
        <div className="flex-container">
          {
            this.props.data.map((news) => (
              <div className="flex-items news" key={ news.url + 'tes' }>
                <img src={ news.urlToImage } className="news-image" alt={ news.title }/>
                <div className="news-title">{ news.title }</div>
                <div>{ news.description }</div>
                <div><a href={ news.url } target="__blank" className="button">Show Article</a>
                <a className="button" onClick={ () => { this.props.addNews(news) }}>add to favorite</a></div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addNews
}, dispatch)

export default connect(null, mapDispatchToProps)(Articles);