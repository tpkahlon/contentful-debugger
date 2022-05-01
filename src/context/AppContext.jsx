import { createContext } from "react";

const AppContext = createContext({
  app: {},
  labels: {},
  handleChange: () => {},
  handleClick: () => {},
});

export default AppContext;
