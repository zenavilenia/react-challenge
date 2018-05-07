import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';

import './Articles.css';

class MyFavorite extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div className="flex-container">
        {
          this.props.news.map((news) => (
            <div className="flex-items news" key={ news.url + 'tes' }>
              <img src={ news.urlToImage } className="news-image" alt={ news.title }/>
              <div className="news-title">{ news.title }</div>
              <div>{ news.description }</div>
              <div><a href={ news.url } target="__blank" className="button">Show Article</a></div>
            </div>
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  news: state.user.news
})

export default connect(mapStateToProps, null)(MyFavorite);