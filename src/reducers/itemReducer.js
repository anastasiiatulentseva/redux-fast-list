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
      return [
        ...state.filter(item => item.id !== action.item.id ),
        action.item
      ]

    default:
      return state
  }
}
