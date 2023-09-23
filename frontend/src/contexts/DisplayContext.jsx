import { createContext } from "react";

const DisplayContext = createContext({
  display: "",
  setDisplay: () => {},
});

export default DisplayContext;
