import "./Nav.css";
import logo from "../../assets/p.jpg";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { MdOutlineWhatshot } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";
import { MdConfirmationNumber } from "react-icons/md";
import { MdBedroomParent } from "react-icons/md";
import { MdOutlinePool } from "react-icons/md";
import { LuTentTree } from "react-icons/lu";
import { GiWoodCabin } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaTreeCity } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";

function Nav() {
  let [visible, setVisible] = useState(false);
  return (
    <div id="nav">
      {/**NAV 1 START HERE */}
      <div className="nav1">
        <div className="logo">
          <img src={logo} alt="" width="50px" />
          <h1>Private Property Rental</h1>
        </div>
        <div className="search">
          <input type="text" placeholder="search destination" />
          <button>
            <span id="nav1-search">Search</span>
            <IoSearchSharp className="nav1-search-icon" size={20} />
          </button>
        </div>
        <div className="ham">
          <button id="btn1">List your home</button>
          <button
            id="btn2"
            onClick={() => {
              setVisible((prev) => !prev);
            }}
          >
            <RxHamburgerMenu id="hamburger" size={20} />
            <CgProfile id="ham-profile" size={20} />
          </button>
        </div>
      </div>
      {/**NAV 2 START HERE*/}
      <div className="nav2">
        <div className="svg1">
          <MdOutlineWhatshot />
          <h3>Trending</h3>
        </div>
        <div className="svg1">
          <GiFamilyHouse />
          <h3>Houses</h3>
        </div>
        <div className="svg1">
          <MdBedroomParent />
          <h3>Rooms</h3>
        </div>
        <div className="svg1">
          <MdConfirmationNumber />
          <h3>Farm Houses</h3>
        </div>
        <div className="svg1">
          <MdOutlinePool />

          <h3>Pool Houses</h3>
        </div>
        <div className="svg1">
          <LuTentTree />

          <h3>Tent Houses</h3>
        </div>
        <div className="svg1">
          <GiWoodCabin />

          <h3>Cabins</h3>
        </div>
        <div className="svg1">
          <SiHomeassistantcommunitystore />

          <h3>Shops</h3>
        </div>
        <div className="svg1">
          <FaTreeCity />

          <h3>Forest Houses</h3>
        </div>
      </div>

      {/* hide and show hambuger  */}
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
