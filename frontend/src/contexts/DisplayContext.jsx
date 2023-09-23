import { createContext } from "react";

const DisplayContext = createContext({
  display: "home",
  setDisplay: () => {},
});

export default DisplayContext;
