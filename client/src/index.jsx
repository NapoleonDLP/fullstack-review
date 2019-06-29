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
      repos: []
    }

  }

  search (term) {
    // console.log(typeof term);
    // TODO
    //make ajax call to your server here
    //invoke your getrepos from there
    $.ajax({
      type: "POST",
      url: 'http://localhost:1128/repos',
      data: {username:term}
      // success: success,
      // dataType: dataType
    });
    // getReposByUsername.getReposByUsername(term);
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));