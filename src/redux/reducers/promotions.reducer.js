import {
    SET_FILTERED_PROMOTIONS,
    SET_PROMOTIONS,
    SET_SELECTED_PROMOTION,

} from '../constants';
const initialState = {
    promotions:[],
    filteredPromotions:[],
    selectedPromotion:{}
};
const promotionsReducer = (state = initialState, action) => {
switch(action.type) {
    
    case SET_PROMOTIONS:
    return {
        ...state,
        promotions:action.promotions
    };
    case SET_FILTERED_PROMOTIONS:
    return {
        ...state,
        filteredPromotions:action.filteredPromotions
    };

    case SET_SELECTED_PROMOTION:
    return {
        ...state,
        selectedPromotion:action.selectedPromotion
    };

    default:
    return state;
    }
}
export default promotionsReducer;