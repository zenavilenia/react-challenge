import axios from 'axios';

import React, { Component } from 'react';
import './Home.css';
import NavbarCategory from './NavbarCategory'

class Home extends Component {
  constructor() {
    super();
    this.state = {
      newsData: []
    }
  }

  componentDidMount() {
    this.fetchNewsData();
  }

  fetchNewsData() {
    const country = this.props.match.params.country || 'us';
    console.log('country', country)
    axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=8750ab3a273a48de9dd3010c912439e0`)
      .then(response => {
        const articles = response.data.articles;
        console.log('articles---', articles)
        this.setState({ newsData: articles })
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <NavbarCategory/>
        <div className="flex-container">
          {
            this.state.newsData.map((news, i) => (
              <div className="flex-items news" key={ i }>
                <img src={ news.urlToImage } className="news-image"/>
                <div className="news-title">Title: { news.title }</div>
                <div>{ news.description }</div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Home;