import bg from "../assets/bg0.gif";
import { category } from "../Category";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="hero-bg">
        <img src={bg} alt="background" />
      </div>

      <div className="category-section">
        {category.slice(0,5).map((item, key) => (
          <div className="category-card" key={key}>
            <img src={item.image} alt={item.name} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
