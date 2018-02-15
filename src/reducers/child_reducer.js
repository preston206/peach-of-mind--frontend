export default function (state = {}, action) {
    switch (action.type) {
        case 'GET_CHILD':
            return { ...state, child: action.payload }

        case 'GET_CHILDREN':
            return { ...state, children: action.payload }

        case 'ADD_CHILD':
            return { ...state, child: action.payload }

        case 'EDIT_CHILD':
            return { ...state, child: action.payload }

        case 'DELETE_CHILD':
            return { ...state, child: action.payload }

        default:
            return state;
    }
};