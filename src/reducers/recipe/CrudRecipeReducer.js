import StoreRecipe from "../../services/minecraft/recipe/crud/StoreRecipe";
import RecipeCrudActionCreator from "../../actions/recipe/RecipeCrudActionCreator";
import ProcessStatuses from "../../dictionaries/actions/process/Statuses";

function storeRecipe(action) {
    return async function storeRecipeThunk(dispatch, getState) {
        const recipeToStore = action.payload;

        await StoreRecipe(
            recipeToStore.name,
            recipeToStore.ingredients,
            recipeToStore.results
        ).then(response => {
            if (response.status === 201) {
                dispatch(RecipeCrudActionCreator.storeRecipeSuccess());
            } else {
                dispatch(RecipeCrudActionCreator.storeRecipeError());
            }
        }).catch(error => {
            dispatch(RecipeCrudActionCreator.storeRecipeError());
        });
    }
}

function storeRecipeSuccess(state, action) {
    return {
        ...state,
        process: {
            ...state.process,
            storeOne: {
                status: ProcessStatuses.success
            }
        }
    };
}

function storeRecipeError(state, action) {
    return {
        ...state,
        process: {
            ...state.process,
            storeOne: {
                status: ProcessStatuses.error
            }
        }
    };
}

function resetStoreRecipeStatus(state, action) {
    return {
        ...state,
        process: {
            ...state.process,
            storeOne: {
                status: ProcessStatuses.idle
            }
        }
    };
}

export default {
    storeRecipe,
    storeRecipeSuccess,
    storeRecipeError,
    resetStoreRecipeStatus
};
