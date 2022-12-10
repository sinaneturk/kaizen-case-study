import { SET_SELECTED_TAG, SET_TAGS } from '../constants';
const initialState = {
    tags:[],
    selectedTag:{Id:"-1"}
};
const tagsReducer = (state = initialState, action) => {
switch(action.type) {
    
    case SET_TAGS:
    return {
        ...state,
        tags:action.tags
    };

    case SET_SELECTED_TAG:
    return {
        ...state,
        selectedTag:action.selectedTag
    };

    default:
    return state;
    }
}
export default tagsReducer;