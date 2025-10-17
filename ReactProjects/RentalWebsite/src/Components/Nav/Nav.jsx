import "./Nav.css";
import logo from "../../assets/p.jpg";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";

function Nav() {
  let [visible, setVisible] = useState(false);
  return (
    <div id="nav">
      <div className="nav1">
        <div className="logo">
          <img src={logo} alt="" width="50px" />
          <h1>Private Property Rental</h1>
        </div>
        <div className="search">
          <input type="text" placeholder="search destination" />
          <button>Search</button>
        </div>
        <div className="ham">
          <button id="btn1">List your home</button>
          <button id="btn2" onClick={()=>{setVisible(prev=>!prev)}}>
            <RxHamburgerMenu size={20} />
            <CgProfile size={20} />
          </button>
        </div>
      </div>
      <div className="nav2">2</div>
      {visible ? (
        <div className="hamburger">
          <div className="ham1">Login</div>
          <div className="ham1">Sign up</div>
          <div className="ham1">List your home</div>
          <div className="ham1">help center</div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Nav;
