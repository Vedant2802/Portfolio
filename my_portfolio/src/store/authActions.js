export const actions = {
  ADD_NEW_USERS: "ADD_NEW_USERS",
  SET_USER_DATA: "SET_USER_DATA",
};

export const addNewUsers = (data) => {
  return { type: actions.ADD_NEW_USERS, payload: data };
};

export const setUserData = (data) => {
  console.log(data);
  return { type: actions.SET_USER_DATA, payload: data };
};
