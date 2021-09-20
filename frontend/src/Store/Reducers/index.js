const initialState = {
  user: { things_user_likes: [] },
  user_posts: [],
  token: "",
  posts: [],
  displayPost: false,
  template_profil: { 
    things_user_likes: [],
    banner_position: 50},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNIN":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.access,
      };
    case "TOKEN":
      return { ...state, token: action.payload };
    case "POSTS":
      return { ...state, posts: action.payload };
    case "FETCHPROFILE":
      return { ...state, user: action.payload };
    case "USERPOSTS":
      return { ...state, user_posts: action.payload };
    case "TEMLATE_PROFIL": {
      const template_profil = {...state.template_profil, ...action.payload};
      return {...state, template_profil };
    }
    case "BANNER_POSITION":{
      const template_profil = {...state.template_profil, ...action.payload};
      return {...state, template_profil };
    }
    case "registration_email":
      return { ...state, confirmationEmail: action.payload};
    case "SEARCH_POSTS_USERS":
        return { ...state, searchpostsusers: action.payload};
    default:
      return state;
  }
};

export default reducer;
