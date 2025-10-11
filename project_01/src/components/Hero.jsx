import cat from "../assets/cat.jpg";
import elephant from "../assets/elephant-2870777_1280.jpg";
import leopard from "../assets/leopard.jpg";
const Hero = () => {
  return (
    <>
      <div className="hero">
        <img src={leopard} alt="" width="300px" />
        <img src={cat} alt="" width="300px" />
        <img src={elephant} alt="" width="300px" height="200px"/>
      </div>
    </>
  );
};

export default Hero;
