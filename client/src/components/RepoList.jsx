import React from 'react';

var RepoList = (props) => {
// class RepoList extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     repos: ['repo', 'repo']
  //   }
  //   this.loadRepos = this.loadRepos.bind(this);
  // }

  // ComponentWillMount () {
  //   console.log('YUP THIS RAN')
  //   // this.loadRepos();
  // }

  // loadRepos() {
  //   console.log('loadRepos is called')
  //   fetch('http://localhost:1128/repos')
  //   .then(results => response.json())
  //   .then(result => {
  //     this.setState({respos: result})
  //   })
  // }

  // ComponentDidMount () {
  //   console.log('ANND FINALLY THIS RAN')
  //   // this.loadRepos();
  // }



    return (
      <div>
        <h4> Repo List Component </h4>
        There are {props.repos.length} repos.
        {props.repos.map(repo =>
          <div>
            <li>Repo Name: {repo.name}</li>
            <ul><a href={repo.html_url} target="_blank">URL: {repo.html_url}</a></ul>
            <ul>Forks: {repo.forks}</ul>
            <ul>User: {repo.owner}</ul>
          </div>
        )}
      </div>
    )
}

export default RepoList;