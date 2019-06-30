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
      repos: ['repo', 'repo']
    }
  this.loadRepos = this.loadRepos.bind(this);
  }

  loadRepos() {
    fetch('http://localhost:1128/repos', {
    headers: {
      "Accept": 'text/plain',
      "Content-Type": 'application/json'
    }})
    .then(response => response.json())
    .then(json => console.log(json))
    .then(result => this.setState({repos: result}))
    .then(result => console.log('****',result))
    // .catch(err => console.log(err));
      // this.setState({repos: result})
  }

  componentDidMount () {
    // this.loadRepos();
    var data = fetch('http://localhost:1128/repos')
    .then(response => response.json())
    // .then(obj => obj.json())
    .then(result => this.setState({repos: result}))
    .then(result => console.log(result))
    // .catch(err => console.log(err));
      // this.setState({repos: result})
  }

  search (term) {
    $.ajax({
      type: "POST",
      url: 'http://localhost:1128/repos',
      data: {username:term}
      // success: success,
      // dataType: dataType
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)}/>
      <RepoList repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));