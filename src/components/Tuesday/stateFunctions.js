export const saveState = (key, state,) => {
    let stateAsString = JSON.stringify(state);
    localStorage.setItem(key, stateAsString);
};

export const restoreState = (key, defaultState) => {
    let stateAsString = localStorage.getItem(key);
    if (stateAsString != null) {
       return JSON.parse(stateAsString);
    } else {
        return defaultState;
    }
};