import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';

import './Home.css';
import { getNews } from '../store/news/action'
import Articles from './Articles'

class Home extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  componentDidMount() {
    this.props.getNews('us')
  }

  render() {
    let { data, loading, error } = this.props.getList;
    // const token = localStorage.getItem('token');
    if(loading) {
      return <div className="loader"></div>
    } else if (error.status) {
      return <h1>Oops! Something error: { error.message } </h1>
    } else {
      return <Articles data={ data }/>
    }
  }
}

const mapStateToProps = (state) => ({
  getList: state.news
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getNews
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home);