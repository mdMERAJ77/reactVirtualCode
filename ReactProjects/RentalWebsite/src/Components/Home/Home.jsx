import Card from "../Card/Card";
import house from "../../assets/house.jpg";
import house1 from "../../assets/housekichen.jpg";
import house2 from "../../assets/houseliving.jpg";
import farmhouse from '../../assets/farmhouse2.jpg'
import farmhouse1 from '../../assets/farmhouse1.jpg'
import farmhouse2 from '../../assets/farmhouse.jpg'


import "./Home.css";
function Home() {
  return (
    <div id="home">
      <Card image1={house} image2={house1} image3={house2} title={"2BKH villa in jhansi"} price={"20,000"}/>
      <Card image1={farmhouse} image2={farmhouse1} image3={farmhouse2} title={"1BHK farmhouse in lucknow"} price={"30,000"}/>
      {/* <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card /> */}
    </div>
  );
}

export default Home;
