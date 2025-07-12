import { endpoints } from "../constants/constants";

export const getUserData = async () => {
  try {
    const response = await fetch(endpoints.userData);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    // console.log(data);

    return data;
  } catch (error) {
    console.error("Failed to fetch user data:", error);
    return null;
  }
};

export const authData = async (dispatch) => {
  try {
    const response = await fetch("https://api.github.com/users/Vedant2802");
    const data = await response.json();
    console.log(data);
    dispatch(setUserData);
  } catch (error) {
    throw new Error(error);
  }
};
