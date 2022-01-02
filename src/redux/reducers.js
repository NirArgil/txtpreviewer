import { GetText } from './types'

const initialState = {
  textContent: '',
}

const getTextReducer = (state = initialState, action) => {

    switch (action.type) {
        case GetText:

            return {      
                ...state,
                textContent: action.payload,
            }

        default:
            return state;
    }
}

export default getTextReducer;