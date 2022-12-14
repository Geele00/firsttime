import { createHeaders } from "./Index";
const apiUrl = process.env.REACT_APP_API_KEY_URL;         //access api

// check for users
const checkForUser = async (username) => {
  try {
    const response = await fetch(`${apiUrl}?username=${username.username}`);
    if (!response.ok) {
      throw new Error("Could not complete request");
    }
    const data = await response.json();
    return [null, data];
  } catch (errors) {
    return [errors.message, []];
  }
};

//new user
const createUser = async (username) => {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: createHeaders(),
      body: JSON.stringify({
        username,
        translations: [],
      }),
    });
    if (!response.ok) {
      throw new Error("Could not create user with username " + username);
    }
    const data = await response.json();
    return [null, data];
  } catch (errors) {
    return [errors.message, []];
  }
};

export const loginUser = async (username) => {
  const [checkError, user] = await checkForUser(username);

  if (checkError !== null) {
    return [checkError, null];
  }

  if (user.length > 0) {
    return [null, user.pop()];
  }

  return await createUser(username);
};
