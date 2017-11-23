import * as types from './actionTypes';
import itemApi from '../api/mockItemApi';
import {ajaxCallError, beginAjaxCall} from './ajaxStatusActions';

export function loadItemsSuccess(items) {
  return { type: types.LOAD_ITEMS_SUCCESS, items};
}

export function loadItems() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return itemApi.getAllItems().then(items => {
      dispatch(loadItemsSuccess(items));
    }).catch(error => {
      dispatch(ajaxCallError());
      throw(error);
    });
  };
}

export function toggleItem(item) {
  return {
    type: types.TOGGLE_ITEM,
    item: item
  };
}
