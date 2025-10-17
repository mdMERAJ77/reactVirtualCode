import Card from "../Card/Card";
import "./Hero.css";
import ferarri from '../../assets/ferrari.jpg'
import porsche from '../../assets/porsche.jpg'
import lambo from '../../assets/lambo.png'
function Hero() {
  return (
    <div className="hero">
      <Card  name="ferarri" price="6cr" imageUrl={ferarri}/>
      <Card  name="porsche" price="7cr" imageUrl={porsche}/>
      <Card  name="lambo" price="3cr" imageUrl={lambo}/>
    </div>
  );
}

export default Hero;
