import React from 'react';

class RepoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      repos: ['repo', 'repo']
    }
  }

  componentDidMount () {
    fetch('http://localhost:1128/repos')
    .then(response => response.json())
    .then(result => this.setState({repos: result}))
    .catch(err => console.log(err));
  }

  render () {
    return (
      <div>
        <h4> Repo List Component </h4>
          There are {this.state.repos.length} repos.
            {this.state.repos.map((repo, index) =>
              <div key={index}>
                <div>User: {repo.owner}</div>
                <div>Repo name: {repo.name}</div>
                <div>Forks: {repo.forks}</div>
                <div><a href={repo.html_url} target="_blank">URL: {repo.html_url}</a></div>
              </div>
            )}
      </div>
    )
  }
}

export default RepoList;