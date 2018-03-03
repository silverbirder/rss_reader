import {
  FETCH_QIITA,
} from '../../actions'

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_QIITA:
      return Object.assign({}, state, {
        items: action.data,
        loaded: action.loaded,
      })
    default:
      return Object.assign({}, state, {
        items: [],
        loaded: false,
      })
  }
}
