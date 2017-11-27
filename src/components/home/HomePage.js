import React from 'react'
import { Link } from 'react-router'

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Checklist</h1>
        <p>React, Redux.</p>
        <Link to="checklist" className="btn btn-primary btn-lg">Look here</Link>
      </div>
    )
  }
}

export default HomePage
