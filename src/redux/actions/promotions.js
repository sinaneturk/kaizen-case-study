import { SET_FILTERED_PROMOTIONS, SET_PROMOTIONS, SET_SELECTED_PROMOTION } from "../constants"

export const setPromotions = () => {
    return async (dispatch) => {
        try {
            fetch("https://api.extrazone.com/promotions/list?Channel=PWA", {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'X-Country-Id': 'TR',
                    'X-Language-Id': 'TR'
                })
            })
            .then((response_promo) => response_promo.json())
            .then((promotions) => {
              /*for(let i =0; i< 10; i++){
                        promotions.push(promotions[0])
                } */
                dispatch({
                    type:SET_PROMOTIONS,
                    promotions
                })
                dispatch({
                    type:SET_FILTERED_PROMOTIONS,
                    filteredPromotions:promotions
                })
            });
            
        } catch (e) {
            console.log("CATCH ERROR =>: ", e)
        }
    }
}

export const setPromotionDetail = (promoId) => {
    return async (dispatch) => {
        try {
            fetch(`https://api.extrazone.com/promotions?Id=${promoId}`, {
                method:'GET',
                headers: new Headers({
                    'Content-Type':'application/json',
                    'X-Country-Id':'TR',
                    'X-Language-Id':'TR'
                })})
            .then((response) => response.json())
            .then((promo) => {
                dispatch(setSelectedPromotion(promo));
            })
    
        } catch (e) {
            console.log("CATCH ERROR =>: ", e)
        }
    }
}

export const setSelectedPromotion = (selectedPromotion) => {
    return {
        type:SET_SELECTED_PROMOTION,
        selectedPromotion
    }
}

export const setFilteredPromotions = (filteredPromotions) => {
    return {
        type:SET_FILTERED_PROMOTIONS,
        filteredPromotions
    }
}