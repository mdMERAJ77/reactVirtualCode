import Card from "../Card/Card";
import "./Hero.css";
import ferarri from '../../assets/ferrari.jpg'
import porsche from '../../assets/porsche.jpg'
import lambo from '../../assets/lambo.png'
function Hero() {
  return (
    <div className="hero">
      <Card imageUrl={ferarri} name="ferarri" price="6cr"/>
      <Card imageUrl={porsche} name="porsche" price="7cr"/>
      <Card imageUrl={lambo} name="lambo" price="3cr"/>
    </div>
  );
}

export default Hero;
