import { createContext } from "react";

const UserContext = createContext({
  userId: 0,
  setUserId: () => {},
  username: "",
  setUsername: () => {},
  loggedIn: false,
  setLoggedIn: () => {},
});

export default UserContext;
