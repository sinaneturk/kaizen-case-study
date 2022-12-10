import { SET_SELECTED_TAG, SET_TAGS } from "../constants"

export const setTags = () => {
    return async (dispatch) => {
        try {
            fetch("https://api.extrazone.com/tags/list", {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'X-Country-Id': 'TR',
                    'X-Language-Id': 'TR'
                })
            })
            .then(res => res.json())
            .then(tags => {
                dispatch({
                    type:SET_TAGS,
                    tags
                })
            })
            
        } catch (e) {
            console.log("CATCH ERROR =>: ", e)
        }
    }
}

export const setSelectedTag = (selectedTag) => {
    return {
        type:SET_SELECTED_TAG,
        selectedTag
    }
}