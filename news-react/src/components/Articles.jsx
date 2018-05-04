import React, { Component } from 'react';

import './Articles.css';

class Articles extends Component {
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
                <a href={ news.url } target="__blank" className="button">Show Article</a>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Articles;