import { SET_ACTIVE_TAB } from '../constants';
const initialState = {
    activeTab:"Home",
    activeColor : "#1D1E1C",
    passiveColor : "#BCBCBB"
};
const tabsReducer = (state = initialState, action) => {
switch(action.type) {
    
    case SET_ACTIVE_TAB:
    return {
        ...state,
        activeTab:action.activeTab
    };

    default:
    return state;
    }
}
export default tabsReducer;