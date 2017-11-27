import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { toggleItem }  from '../../actions/itemActions'
import CheckboxElement from '../../components/checklist/CheckboxElement'

class ChecklistItem extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.checkItem = this.checkItem.bind(this)
  }

  checkItem() {
    const item = this.props.item
    const itemToggled = Object.assign({}, item, { checked: !item.checked })
    return this.props.toggleItem(itemToggled)
  }

  setLabel(item) {
    const label = item.checked ? "I am checked!" : "I am unchecked!"
    return Object.assign({}, item, { label })
  }

  render() {
    return (
      <CheckboxElement item={this.setLabel(this.props.item)} onChangeItem={this.checkItem} />
    )
  }
}

ChecklistItem.propTypes = {
  toggleItem: PropTypes.func,
  item: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  const item = state.items.find(item => item.id === ownProps.item.id)
  return { item }
}

export default connect(mapStateToProps,  { toggleItem })(ChecklistItem)
