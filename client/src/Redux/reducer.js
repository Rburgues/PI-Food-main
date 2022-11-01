
import { ALL_RECIPES, SEARCH, FILTER_TYPE } from "./action";
import { ALLTYPE } from "../components/Sidebar/Sidebar";


const initialState = {
    Recipes: [],
    Foods: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_RECIPES:
            return {
                ...state,
                Recipes: action.payload,
                Foods: action.payload
            }
        case SEARCH:
            if (typeof action.payload === "string") {
                alert("Not Found the recipes");
                return { ...state }
            }
            return {
                ...state,
                Recipes: action.payload
            }
        case FILTER_TYPE:
            let FilterType = [...state.Foods]
            let AllType = action.payload === ALLTYPE ? FilterType : FilterType.filter(e => e.diets.find(i => i === action.payload))

            return {
                ...state,
                Recipes: AllType
            }
        
        default:
            return state
    }
};

export default rootReducer;