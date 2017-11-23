import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function itemReducer(state = initialState.items, action) {
  switch(action.type) {
    case types.LOAD_ITEMS_SUCCESS:
      return action.items;

    case types.TOGGLE_ITEM:
      return [
        ...state.filter(item => item.id !== action.item.id ),
        Object.assign({state}, action.item)
      ].sort((a, b) => {return a.id - b.id;});

    default:
      return state;
  }
}
