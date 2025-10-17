import { useContext } from "react";
import "./App.css";
import { data } from "./context/UserContext";
import CardStroy from "./CardStroy";

function App() {
  let { username, age } = useContext(data);
  console.log(username);
  return (
    <>
      <h1>
        My Name is {username} age:{age}
      </h1>
      <CardStroy />
    </>
  );
}

export default App;
