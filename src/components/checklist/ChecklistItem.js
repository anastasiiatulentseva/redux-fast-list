import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import * as itemActions from '../../actions/itemActions';
import CheckboxElement from './CheckboxElement';

class ChecklistItem extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.checkItem = this.checkItem.bind(this);
  }

  checkItem() {
    const item = this.props.item;
    const label = !item.checked ? "I am checked!" : "I am unchecked!";
    const itemToggled = Object.assign({}, item, {checked: !item.checked, label});
    return this.props.actions.toggleItem(itemToggled);
  }

  render() {
    return (
      <CheckboxElement item={this.props.item} onChangeItem={this.checkItem} />
    );
  }
}

ChecklistItem.propTypes = {
  actions: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  const item = state.items.find(item => item.id === ownProps.item.id);
  return {
    item
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(itemActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ChecklistItem);
