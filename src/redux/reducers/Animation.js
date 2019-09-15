import axios from 'axios'

export const Types = {
  TOGGLE_MODAL: 'animation/TOGGLE_MODAL'
}

export const Actions = {
  toggleModalAction: () => {
    return {
      type: Types.TOGGLE_MODAL
    }
  }
}

const INITIAL_STATE = {
  showModal: false
}

export default function Animation(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.TOGGLE_MODAL:
      return { ...state, showModal: !state.showModal }
    default:
      return state
      break
  }
}
