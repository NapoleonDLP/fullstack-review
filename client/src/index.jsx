import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
// import getReposByUsername from '../../helpers/github.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  search (term, cb) {
    $.ajax({
      type: "POST",
      url: 'http://localhost:1128/repos',
      data: {username:term},
      success: cb
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)}/>
      <RepoList />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));