import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import * as itemActions from '../../actions/itemActions';
import Checklist from './Checklist';

class ChecklistPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {items} = this.props;
    return (
      <div>
        <h1>Items</h1>
        <Checklist items={items}/>
      </div>
    );
  }
}

ChecklistPage.propTypes = {
  actions: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    items: state.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(itemActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ChecklistPage);
