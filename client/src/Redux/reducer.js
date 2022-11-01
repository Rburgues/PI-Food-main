
import { ALL_RECIPES, SEARCH } from "./action";


const initialState ={
    Recipes: [],
    Foods: [],   
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){         
        case ALL_RECIPES:
            return {
                ...state,
                Recipes: action.payload,
                Foods: action.payload
            }
        case SEARCH:
            if(typeof action.payload === "string"){
                 alert("Not Found the recipes");
                 return {...state}
                  }
            return {
                ...state,
                Recipes: action.payload
            }
        
        default:
        return state
}
};

export default rootReducer;