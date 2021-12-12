import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import { SET_ACTIVE_CONTAINER, SET_COLORS } from "../actions";

export const initialState = {

    activeContainer: 'top',
    colorScheme: {
        background: 'bg-blue-400',
        textColor: 'text-white-100'
    },
}


export const reducer = (state = initialState, action) => {

    switch(action.type) {

        // case (SET_COLORS):
        //     return ({
        //         ...state,
        //         colorScheme: action.payload
        //     })

        case (SET_ACTIVE_CONTAINER):
            return ({
                ...state,
                activeContainer: action.payload.name,
                colorScheme: action.payload.colors
            })

        default:
            return state;

    }
}