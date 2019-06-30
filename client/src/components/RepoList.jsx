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
            <div>Repo Name: {repo.name}</div>
            <div><a herf={repo.html_url}>URL: {repo.html_url}</a></div>
            <div>Forks: {repo.forks}</div>
            <div>User: {repo.owner}</div>

          </div>
        )}
      </div>
    )
}

export default RepoList;