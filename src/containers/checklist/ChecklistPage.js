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
      <Checklist items={items}/>
    )
  }
}

ChecklistPage.propTypes = {
  items: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps)(ChecklistPage)
