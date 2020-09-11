import { SET_CURRENT_ITEM } from '../constants/dropdown'

const initialState = {
  currentItem: null
}

export const dropdown = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload
      }
    default:
      return state
  }
}