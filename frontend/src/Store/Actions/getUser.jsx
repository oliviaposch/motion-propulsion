import Axios from "../../API/index"

export const getUser = (func) => (dispatch, getStore) => {
    const store = getStore();
    //console.log(store);
    const url = "users/me/";
    const config = {
      headers: {
        Authorization: `Bearer ${store.token}`,
        "Content-Type": "application/json",
      },
    };
    Axios.get(url, config).then(response => {
      const user = response.data
      dispatch({type:"FETCHPROFILE", payload: user});
      func(user.things_user_likes);
    });
}