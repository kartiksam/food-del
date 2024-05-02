import { createContext } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
  const contextValue = {
    //if we add any ele in this oj we can access that ele in any component using the context and add some part to idex.js then can use ad easy from props
    food_list,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
