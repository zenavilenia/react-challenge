import axios from 'axios';

import React, { Component } from 'react';
import './Home.css';
import store from '../store/index.js';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      newsData: store.getState()
    }

    store.subscribe(() => {
      const newList = store.getState();
      this.setState({
        newsData: newList
      })
    })
  }

  componentDidMount() {
    const country = this.props.match.params.country || 'us';
    this.fetchNewsData(country);
  }
  
  componentWillReceiveProps(props) {
    const country = props.match.params.country
    this.fetchNewsData(country);
  }

  fetchNewsData(country) {
    axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=8750ab3a273a48de9dd3010c912439e0`)
      .then(response => {
        const articles = response.data.articles;

        store.dispatch({
          type: 'LOAD_NEWS',
          payload: articles
        })
        this.setState({ newsData: store.getState() })
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div className="flex-container">
          {
            this.state.newsData.map((news, i) => (
              <div className="flex-items news" key={ i }>
                <img src={ news.urlToImage } className="news-image" alt={ news.title }/>
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