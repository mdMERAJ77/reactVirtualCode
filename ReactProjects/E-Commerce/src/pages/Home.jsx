import { useState } from "react";
import bg from "../assets/bg0.gif";
import { category } from "../Category";
import Product from "../components/Product/Product";
import { dummydata } from "../dummydata";
import "./Home.css";
import Footer from "../components/Footer/Footer";

function Home() {
  let[cate,setCate]=useState(dummydata)
  function filterProducts(category){
    const updatedata= dummydata.filter((item)=>
     (item.category==category))
     setCate(updatedata)
  }
  return (
    <div className="home">
      <div className="hero-bg">
        <img src={bg} alt="background" />
      </div>

      <div className="category-section">
        {category.slice(0,5).map((item, key) => (
          <div onClick={()=>{filterProducts(item.name)}} className="category-card" key={key}>
            <img src={item.image} alt={item.name} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      <h1 id="product-section-h1">Trending Products</h1>
      <div className="product-section">
        {cate.slice(0,7).map((item,key)=>{
          return <Product key={key} name={item.name} image={item.image} price={item.price} id={item.id}/>
        })}
      </div>

    </div>
  );
}

export default Home;
