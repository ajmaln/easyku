import * as t from './actionTypes';


const initialState = {
    datas: [],
    loading: true,
}

export default (state = initialState, action) => {
    switch (action.type) {
      case t.LOAD_DATA:
        return {
            ...state,
            loading: true
        }
  
      case t.LOAD_COMPLETE:
        return {
            ...state,
            loading: false,
            datas: action.data
          
        }

      default:
        return state
    }
  }