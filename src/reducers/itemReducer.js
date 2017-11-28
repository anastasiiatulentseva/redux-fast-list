import {
  LOAD_ITEMS_SUCCESS,
  TOGGLE_ITEM } from '../actions/itemActions'

const initialState: {} = {
  items: []
}

export default function itemReducer(state = initialState.items, action) {
  switch(action.type) {
    case LOAD_ITEMS_SUCCESS:
      return action.items

    case TOGGLE_ITEM:
      return state.map( (item, index) => {
        if (index !== state.findIndex(item => item.id === action.item.id)) {
          return item;
        }
        // return {...item, checked: action.item.checked} // eslint can't parse :((
        return Object.assign({}, item, {checked: action.item.checked})
      })

    default:
      return state
  }
}
