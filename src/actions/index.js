import _ from 'lodash';
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");

  //returning promise/function in paylaod? so will cycle through one more time in middleware
  //till pure object
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUsers = id => dispatch => {
  _fetchUsers(id, dispatch);
};

//SIDE EFFECT OF THIS IS CANT REFETCH USER IF THIS WAS REQUIRED IN FUTURE
//to memoize it only once need to take function outside of action definition above
//if in action definition above constantly rememorized
//memoized whenever defined but not when called
const _fetchUsers = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USERS", payload: response.data});
});