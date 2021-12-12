export const SET_COLORS = 'SET_COLORS'
export const SET_ACTIVE_CONTAINER = 'SET_ACTIVE_CONTAINER'

export const setColors = (obj) => {
    return ({type: SET_COLORS, payload: obj})
}

export const setActiveContainer = (name, colors) => {
    return ({type: SET_ACTIVE_CONTAINER, payload: {name: name, colors: colors}})
}