import update from 'react-addons-update'
import { LOCATION_CHANGE } from 'react-router-redux'

import ActionTypes from '../actionTypes'

const initialState = {
  isNavigationExpanded: false,
  isSidebarExpanded: false,
}

export default function modal(state = initialState, action) {
  switch (action.type) {
  case LOCATION_CHANGE:
    return update(state, {
      isNavigationExpanded: { $set: false },
      isSidebarExpanded: { $set: false },
    })
  case ActionTypes.DRAWER_TOGGLE_NAVIGATION:
    return update(state, {
      isNavigationExpanded: { $set: !state.isNavigationExpanded },
      isSidebarExpanded: { $set: false },
    })
  case ActionTypes.DRAWER_TOGGLE_SIDEBAR:
    return update(state, {
      isNavigationExpanded: { $set: false },
      isSidebarExpanded: { $set: !state.isSidebarExpanded },
    })
  default:
    return state
  }
}