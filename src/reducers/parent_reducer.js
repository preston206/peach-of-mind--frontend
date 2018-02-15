export default function (state = {}, action) {
    switch (action.type) {
        // case 'REGISTER':
        //     return { ...state, parent: action.payload }

        // case 'LOGIN':
        //     return { ...state, parent: action.payload }

        // case 'LOGOUT':
        //     return { ...state, parent: action.payload }

        default:
            return state;
    }
};