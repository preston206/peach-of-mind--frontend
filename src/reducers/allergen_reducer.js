export default function (state = {}, action) {
    switch (action.type) {
        case 'GET_ALLERGEN':
            return { ...state, allergen: action.payload }

        case 'GET_ALLERGENS':
            return { ...state, allergens: action.payload }

        case 'ADD_ALLERGEN':
            return { ...state, allergen: action.payload }

        case 'EDIT_ALLERGEN':
            return { ...state, allergen: action.payload }

        case 'DELETE_ALLERGEN':
            return { ...state, allergen: action.payload }

        default:
            return state;
    }
};