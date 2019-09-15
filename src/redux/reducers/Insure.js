import axios from 'axios'

export const Types = {
  GET_INSURES: 'insure/GET_INSURES'
}

export const Actions = {
  getInsures: () => getInsures()
}

export const Creators = {}

const INITIAL_STATE = {
  insures: []
}

export default function Insure(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_INSURES:
      return { ...state, insures: action.payload }
    default:
      return state
      break
  }
}

const getInsures = () => {
  return dispatch => {
    return axios('http://10.212.0.152:3000/quotes')
      .then(resp => {
        console.log('asdasd', resp)

        dispatch({ type: Types.GET_INSURES, payload: resp.data })
        return resp
      })
      .catch(err => {
        return err
      })
  }
}
