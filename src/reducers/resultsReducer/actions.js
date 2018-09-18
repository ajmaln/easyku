import * as t from './actionTypes'


export const fetchData = (url) => {
    /**
     * Action to fetch data from the API
     */
    return dispatch => {
        dispatch({
            type: t.LOAD_DATA
        })
        return fetch(url).then(resp => {
            resp.json().then(datas => {
                dispatch({
                    type: t.LOAD_COMPLETE,
                    data: datas
                })
            })
        })
    }
}

