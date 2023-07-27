import { createContext } from "react";

const UserContext = createContext({
  userId: 0,
  setUserId: () => {},
  username: "",
  setUsername: () => {},
});

export default UserContext;
