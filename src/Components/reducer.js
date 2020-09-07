export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //Set token to null after debugging!
  //token:"BQDJ3Xb7f9tLpfjFn -QGez8qXEgB9o4nD_iECwKfFeclYRtgQCOxNwsU982lpH6kCp3CZWMhk1W2_2sq26Xy9teHGx -dOkREUVV4s6oips8gnZc73178wQKhp1vXObfg3poI -Ca -VFT9t4f4pJ3AGjwQh3JPA0JDyVy1NQdGsHKuW0DN",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};
export default reducer;
