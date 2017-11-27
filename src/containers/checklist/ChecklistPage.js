import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Checklist from '../../components/checklist/Checklist'

class ChecklistPage extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { items } = this.props
    return (
      <div>
        <h1>Items</h1>
        <Checklist items={items}/>
      </div>
    )
  }
}

ChecklistPage.propTypes = {
  items: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    items: state.items.sort((a, b) => { return a.id - b.id })
  }
}

export default connect(mapStateToProps)(ChecklistPage)
