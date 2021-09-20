import Axios from "../../API/index"
import standardAvatar from "../../Assets/pngs/generic_user.png";

export const updateImage = (e) => async (dispatch, getStore) => {
    const store = getStore()
    const url = "users/me/";
    const data = new FormData();

    if (e.target.name === "remove") {
      const response = await fetch(standardAvatar);
      const blob = await response.blob();
      const file = new File([blob], "image.jpg", { type: blob.type });
      data.append(e.target.name, file);
    } else {
      data.append(e.target.name, e.target.files[0]);
    }

    const config = {
      headers: {
        Authorization: `Bearer ${store.token}`,
        "Content-Type": "multipart/form-data",
      },
    };
    try {
      const resp = await Axios.patch(url, data, config);
      if (resp.status === 200) {
        dispatch({ type: "FETCHPROFILE", payload: resp.data });
      }
    } catch (err) {
      if (err.response.status === 400) {
        console.log(err.response);
      }
    }
}