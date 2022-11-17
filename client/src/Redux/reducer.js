
import { ALL_RECIPES, SEARCH_BY_NAME, DIET_LIST, FILTER_TYPE, FILTER_BY_CREATE, ORDER_BY_NAME, ORDER_BY_HEALTHSCORE, CLEAN_DATA, CREATE_RECIPE, ALL_ID } from "./action";
import { ALLTYPE } from "../components/Sidebar/sidebar";


const initialState = {
    recipes: [],
    filters: [],
    dietList: [],
    recipeDetails: {}
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_RECIPES:
            return {
                ...state,
                recipes: action.payload,
                filters: action.payload,
            }
        case SEARCH_BY_NAME:
            if (typeof action.payload === "string") {
                alert("Not Found the recipes");
                return { ...state }
            }
            return {
                ...state,
                recipes: action.payload
            }
        case DIET_LIST:
            return {
                ...state,
                dietList: action.payload
            }

        case FILTER_TYPE:
            let FilterType = [...state.filters]
            let AllType = action.payload === ALLTYPE ? FilterType : FilterType?.filter(e => e.diets.find(i => i === action.payload))

            return {
                ...state,
                recipes: AllType
            }

        case FILTER_BY_CREATE:
            let filter = [];
           
            if (action.payload === 'createdInDb') filter = state.filters.filter(el => typeof el.id == "string")
            
            if (action.payload === 'spoonacular') filter = state.filters.filter(el => typeof el.id == "number")
            
            return {
                ...state,
                recipes: action.payload === 'ALL' ? state.filters : filter,
               
            }
        case ORDER_BY_NAME:
            let sortedNames = [...state.recipes];
            if (action.payload === 'AZ') {
                sortedNames = sortedNames.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
            } else {
                sortedNames = sortedNames.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)
            }
            return {
                ...state,
                recipes: sortedNames
            }

        case ORDER_BY_HEALTHSCORE:
            let sortHealthScore = [...state.recipes];
            if (action.payload === '0-100') {
                sortHealthScore = sortHealthScore.sort((a, b) => a.healthScore > b.healthScore ? 1 : -1)
            } else {
                sortHealthScore = sortHealthScore.sort((a, b) => a.healthScore < b.healthScore ? 1 : -1)
            }
            return {
                ...state,
                recipes: sortHealthScore
            }

        case CLEAN_DATA:
            return {
                ...state,
                recipeDetails: action.payload,

            };

        case CREATE_RECIPE:
            return {
                ...state
            }

        case ALL_ID:
            return {
                ...state,
                recipeDetails: action.payload
            };

        default:
            return state
    }
};

export default rootReducer;