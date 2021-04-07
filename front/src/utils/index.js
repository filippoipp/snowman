export const getCurrentUser = () => {
  let user = null;
  try {
    user = localStorage.getItem('user') != null ? JSON.parse(localStorage.getItem('user')) : null;
  } catch (error) {
    console.log(">>>> src/utils/index.js : getCurrentUser -> error", error)
    user = null;
  }
  return user;
}

export const getCurrentSearch = () => {
  let name = null;
  try {
    name = localStorage.getItem('name') != null ? JSON.parse(localStorage.getItem('name')) : null;
  } catch (error) {
    console.log(">>>> src/utils/index.js : getCurrentName -> error", error)
    name = null;
  }
  return name;
}

export const getCurrentViewUser = () => {
  let viewUser = null;
  try {
    viewUser = localStorage.getItem('viewUser') != null ? JSON.parse(localStorage.getItem('viewUser')) : null;
  } catch (error) {
    console.log(">>>> src/utils/index.js : getCurrentViewUser -> error", error)
    viewUser = null;
  }
  return viewUser;
}

export const setCurrentUser = (user) => {
  try {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
    } else {
      localStorage.removeItem('user');
    }
  } catch (error) {
    console.log(">>>> src/utils/index.js : setCurrentUser -> error", error)
  }
}

export const setCurrentSearch = (name) => {
  try {
    if (name) {
      localStorage.setItem('name', JSON.stringify(name))
    } else {
      localStorage.removeItem('name');
    }
  } catch (error) {
    console.log(">>>> src/utils/index.js : setCurrentSearch -> error", error)
  }
}

export const setCurrentViewUser = (user) => {
  try {
    if (user) {
      localStorage.setItem('viewUser', JSON.stringify(user))
    } else {
      localStorage.removeItem('viewUser');
    }
  } catch (error) {
    console.log(">>>> src/utils/index.js : setCurrentViewUser -> error", error)
  }
}
