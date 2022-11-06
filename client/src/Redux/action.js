import axios from "axios";

export const ALL_RECIPES = "ALL_RECIPES"
export const SEARCH = "SEARCH"
export const DIET_LIST = 'DIET_LIST'
export const FILTER_TYPE = "FILTER_TYPE"
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const ORDER_BY_HEALTHSCORE = 'ORDER_BY_HEALTHSCORE';
export const CLEAR_PAYLOADS = 'CLEAR_PAYLOADS';
export const ALL_ID = 'ALL_ID';


export function allRecipes(){
    return function(dispatch){
        axios.get("http://localhost:3001/recipes")
        .then((resp)=>{
            dispatch({
                type: ALL_RECIPES,
                payload: resp.data
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}

export function AllSearch(name){
    return function(dispatch){
        axios.get(`http://localhost:3001/recipes?name=${name}`)
        .then((res)=>{
            dispatch({
                type: SEARCH,
                payload: res.data
            })
        })
        .catch((error)=>{
            console.log(error)
        })
        
    }
}

export  function AllID(id){
    return function(dispatch){
        axios.get(`http://localhost:3001/recipes/${id}`)
        .then((res)=>{
            dispatch({
                type: ALL_ID,
                payload: res.data
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}

export function dietsList() {

    return async function (dispatch) {
        try {
            var res = await axios.get('http://localhost:3001/diets');
              return dispatch({
                type: DIET_LIST,
                payload: res.data
            });
        } catch (error) {
            console.log(error.response.data)
        }
    }
};

export function filterDiet(order){
    return {
        type: FILTER_TYPE,
        payload: order
    }
}

export function orderByName(payload) {
    return {
        type: ORDER_BY_NAME,
        payload: payload
    }
}
export function orderByHealthScore(payload) {
    return {
        type: ORDER_BY_HEALTHSCORE,
        payload: payload,
    }
}

export function resetData() {
    return function (dispatch) {
        dispatch({
            type: CLEAR_PAYLOADS,
            payload: {},
        })
    }
}

