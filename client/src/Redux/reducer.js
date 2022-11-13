
import { ALL_RECIPES, SEARCH, DIET_LIST, FILTER_TYPE, ORDER_BY_NAME, ORDER_BY_HEALTHSCORE, CLEAR_PAYLOADS, CREATE_RECIPE, ALL_ID } from "./action";
import { ALLTYPE } from "../components/Sidebar/sidebar";


const initialState = {
    Recipes: [],
    Filters: [],
    dietList: [],
    RecipeDetails: {}
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_RECIPES:
            return {
                ...state,
                Recipes: action.payload,
                Filters: action.payload,
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
        case DIET_LIST:
            return {
                ...state,
                dietList: action.payload
            }

        case FILTER_TYPE:
            let FilterType = [...state.Filters]
            let AllType = action.payload === ALLTYPE ? FilterType : FilterType?.filter(e => e.diets.find(i => i === action.payload))

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
                RecipeDetails: action.payload,

            };

        case CREATE_RECIPE:
            return {
                ...state,
            }

        case ALL_ID:
            return {
                ...state,
                RecipeDetails: action.payload
            };

        default:
            return state
    }
};

export default rootReducer;