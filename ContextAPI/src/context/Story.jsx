import { createContext } from "react";

export const HindiKahani = createContext();
function Story({ children }) { //props =children console.log(props)
  let kahani = {
    name: "Magarmach ka dukh",
    storyline: "ek magarmach hai uski zindagi me bhut dukh hai",
  };
  return (
    <div>
      <HindiKahani.Provider value={kahani}>{children}</HindiKahani.Provider>
    </div>
  );
}

export default Story;
