import { createContext } from "react";

export const data = createContext();

function UserContext({ children }) { //props =children console.log(props)
  let username = "MERAJ";
  let age =23;
  return (
    <div>
      <data.Provider value={{username,age}}>{children}</data.Provider>
    </div>
  );
}

export default UserContext;
