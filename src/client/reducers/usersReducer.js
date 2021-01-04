const { FETCH_USERS } = require("../actions");


export default (state = [], action) => {
    switch (action.type)
    {
        case FETCH_USERS:
            return action.payload.data;
        default:
            return state;
    }
}