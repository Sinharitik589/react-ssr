
export const FETCH_USERS = "fetch_users";
export const FETCH_CURRENT_USER = "fetch_current_user";

export const fetchUsers = () => async (dispatch,getState,api) => {
    const res = await api.get("/users");
    console.log("response from thunk", res);
    dispatch({
        type: FETCH_USERS,
        payload:res
    })

}

export const fetchCurrentUser = () => async (dispatch, getState, api) => {
    const res = await api.get("/current_user");
    dispatch({
        type: FETCH_CURRENT_USER,
        payload:res
    })
}