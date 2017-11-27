import {
  BEGIN_AJAX_CALL,
  AJAX_CALL_ERROR } from '../actions/ajaxStatusActions'

const initialState: {} = {
  ajaxCallsInProgress: 0
}

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) === '_SUCCESS'
}

export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action) {
  switch(true) {
    case action.type === BEGIN_AJAX_CALL:
      return state + 1

    case action.type === AJAX_CALL_ERROR:
    case actionTypeEndsInSuccess(action.type):
      return state - 1

    default:
      return state
  }

}
