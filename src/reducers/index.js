import { combineReducers } from 'redux';

// NOTE: this reducer name needs to match the name within "mapStateToProps"
import children from './child_reducer';
import allergens from './allergen_reducer';
import parents from './parent_reducer';

const rootReducer = combineReducers({
    children,
    allergens,
    parents
});

export default rootReducer;