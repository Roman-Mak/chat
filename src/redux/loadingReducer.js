const SET_LOADING = "SET-LOADING";

const initialState = {loading: true};

export const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            debugger
            return {...state, loading: action.isLoading};
        default:
            return state;
    }
};

export const setLoading = (isLoading) => ({type: SET_LOADING, isLoading});