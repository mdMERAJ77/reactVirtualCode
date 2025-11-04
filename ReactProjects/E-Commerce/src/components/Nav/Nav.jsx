import { FaShopify } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import './Nav.css'
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="nav">
      {/**Top navbar */}
      <div className="top-nav">
        <div className="logo">
          <span>V-Shop</span>
          <FaShopify />
        </div>
        <form className="search-box">
          <input type="text" placeholder="search-items..." />
          <button>
            <IoSearchSharp />
          </button>
        </form>
        <div className="cart-box">
            <IoCartOutline />
            <span>0</span>
          </div>
      </div>

      {/**Botton navbar */}
      <div className="bottom-nav">
        <Link to="/"><li>Home</li></Link>
        <Link to="/shop" ><li>Shop</li></Link>
        <Link to="/cart"><li>Cart</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
      </div>
    </div>
  );
}

export default Nav;
