
import { ALL_RECIPES, SEARCH, FILTER_TYPE, ORDER_BY_NAME, ORDER_BY_HEALTHSCORE, CLEAR_PAYLOADS } from "./action";
import { ALLTYPE } from "../components/Sidebar/Sidebar";


const initialState = {
    Recipes: [],
    Food: [],
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
        case ORDER_BY_NAME:
            let sortedNames = [...state.Recipes];
            if (action.payload === 'AZ') {
                sortedNames = sortedNames.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
            } else {
                sortedNames = sortedNames.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)
            }
            return {
                ...state,
                Recipes: sortedNames
            }

        case ORDER_BY_HEALTHSCORE:
            let sortHealthScore = [...state.Recipes];
            if (action.payload === '0-100') {
                sortHealthScore = sortHealthScore.sort((a, b) => a.healthScore > b.healthScore ? 1 : -1)
            } else {
                sortHealthScore = sortHealthScore.sort((a, b) => a.healthScore < b.healthScore ? 1 : -1)
            }
            return {
                ...state,
                Recipes: sortHealthScore
            }

            case CLEAR_PAYLOADS:
            return {
                ...state,
                detail: action.payload,
                
            };

        default:
            return state
    }
};

export default rootReducer;