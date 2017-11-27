import itemApi from '../api/mockItemApi'
import { ajaxCallError, beginAjaxCall } from './ajaxStatusActions'

export const LOAD_ITEMS_SUCCESS = "LOAD_ITEMS_SUCCESS"
export const TOGGLE_ITEM = "TOGGLE_ITEM"

export function loadItemsSuccess(items) {
  return { type: LOAD_ITEMS_SUCCESS, items }
}

export function loadItems() {
  return dispatch => {
    dispatch(beginAjaxCall())
    return itemApi.getAllItems().then(items => {
      dispatch(loadItemsSuccess(items))
    }).catch(error => {
      dispatch(ajaxCallError())
      throw(error)
    })
  }
}

export function toggleItem(item) {
  return {
    type: TOGGLE_ITEM,
    item: item
  }
}
