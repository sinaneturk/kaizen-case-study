import {combineReducers} from 'redux';
import tagsReducer from '../reducers/tags.reducer';
import promotionsReducer from '../reducers/promotions.reducer';
import tabsReducer from '../reducers/tabs.reducer';

export const rootReducer = combineReducers({
    tagsReducer,
    promotionsReducer,
    tabsReducer

});
