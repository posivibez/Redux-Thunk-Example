const UsersReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_USERS':
            return [...state, action.payload];
        default:
            return state;
    }
};

export default UsersReducer;