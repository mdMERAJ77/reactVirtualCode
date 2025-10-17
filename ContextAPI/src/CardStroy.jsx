import { useContext } from "react"
import { HindiKahani } from "./context/Story";

function CardStroy() {
    //here we are using destructuring
    // let {name,storyline}=useContext(HindiKahani);
    let storyData = useContext(HindiKahani)
    //here i am note using here destructuring...
   console.log(storyData);
  return (
    <div>
        <h1>StoryName:{storyData.name}</h1>
        <h3>storyline: {storyData.storyline}</h3>
    </div>
  )
}

export default CardStroy