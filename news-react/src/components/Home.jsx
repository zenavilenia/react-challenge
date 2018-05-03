import axios from 'axios';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import React, { Component } from 'react';
import './Home.css';
import { newList } from '../store/news/action'

class Home extends Component {
  constructor() {
    super();
    this.state = {
    }
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
        this.props.newList(articles)
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div className="flex-container">
          {
            this.props.getList.map((news, i) => (
              <div className="flex-items news" key={ i }>
                <img src={ news.urlToImage } className="news-image" alt={ news.title }/>
                <div className="news-title">{ news.title }</div>
                <div>{ news.description }</div>
                <a href={ news.url } target="__blank" class="button">Show Article</a>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getList: state.news
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  newList
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home);