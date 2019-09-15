import axios from 'axios'

export const Types = {
  GET_INSURES: 'insure/GET_INSURES',
  GET_INFORMATIONS: 'insure/GET_INFORMATIONS'
}

export const Actions = {
  getInsures: () => getInsures(),
  getInformations: index => getInformations(index)
}

export const Creators = {}

const INITIAL_STATE = {
  insures: [],
  currentInsure: {
    id: 0,
    description: ''
  }
}

export default function Insure(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_INSURES:
      return { ...state, insures: action.payload }
    case Types.GET_INFORMATIONS:
      return { ...state, currentInsure: action.payload }
    default:
      return state
      break
  }
}

const getInsures = () => {
  return dispatch => {
    return axios('http://10.212.0.152:3000/quotes')
      .then(resp => {
        dispatch({ type: Types.GET_INSURES, payload: resp.data })
        return resp
      })
      .catch(err => {
        return err
      })
  }
}
const getInformations = index => {
  console.log({ index })

  return dispatch => {
    return axios(`http://10.212.0.152:3000/insurance/${index}`)
      .then(resp => {
        dispatch({ type: Types.GET_INFORMATIONS, payload: resp.data })
        return resp
      })
      .catch(err => {
        return err
      })
  }
}
