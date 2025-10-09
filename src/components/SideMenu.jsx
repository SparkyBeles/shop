import { NavLink } from "react-router";
import "../css/SideMenu.css";

const SideMenu = ({ isOpen, toggleSideMenu }) => {
  return (
    <>
      <div className={`side-menu ${isOpen ? "open" : ""}`}>
        <nav>
          <NavLink
            to="/Details"
            onclick={toggleSideMenu}
            className={"nav-button"}
          >
            Details
          </NavLink>

          <NavLink to="/Cart" onclick={toggleSideMenu} className={"nav-button"}>
            Cart
          </NavLink>

          <NavLink
            to="/Checkout"
            onclick={toggleSideMenu}
            className={"nav-button"}
          >
            Checkout
          </NavLink>

          <NavLink
            to="/Confirm"
            onclick={toggleSideMenu}
            className={"nav-button"}
          >
            Confirm
          </NavLink>

          <div className="category-container">
            <NavLink
              to="/Details"
              onclick={toggleSideMenu}
              className={"nav-button-category"}
            >
              Action
            </NavLink>
            <NavLink
              to="/Details"
              onclick={toggleSideMenu}
              className={"nav-button-category"}
            >
              Adventure
            </NavLink>
            <NavLink
              to="/Details"
              onclick={toggleSideMenu}
              className={"nav-button-category"}
            >
              Animation
            </NavLink>
            <NavLink
              to="/Details"
              onclick={toggleSideMenu}
              className={"nav-button-category"}
            >
              Comedy
            </NavLink>
            <NavLink
              to="/Details"
              onclick={toggleSideMenu}
              className={"nav-button-category"}
            >
              Crime
            </NavLink>
            <NavLink
              to="/Details"
              onclick={toggleSideMenu}
              className={"nav-button-category"}
            >
              Documentary
            </NavLink>
            <NavLink
              to="/Details"
              onclick={toggleSideMenu}
              className={"nav-button-category"}
            >
              Drama
            </NavLink>
            <NavLink
              to="/Details"
              onclick={toggleSideMenu}
              className={"nav-button-category"}
            >
              Family
            </NavLink>
            <NavLink
              to="/Details"
              onclick={toggleSideMenu}
              className={"nav-button-category"}
            >
              Fantasy
            </NavLink>

            <NavLink
              to="/Details"
              onclick={toggleSideMenu}
              className={"nav-button-category"}
            >
              History
            </NavLink>

            <NavLink
              to="/Details"
              onclick={toggleSideMenu}
              className={"nav-button-category"}
            >
              Horror
            </NavLink>

            <NavLink
              to="/Details"
              onclick={toggleSideMenu}
              className={"nav-button-category"}
            >
              Musicals
            </NavLink>

            <NavLink
              to="/Details"
              onclick={toggleSideMenu}
              className={"nav-button-category"}
            >
              Romance
            </NavLink>
          </div>

          <div className="about-container">
            <NavLink
              to="/Checkout"
              onclick={toggleSideMenu}
              className={"about-button"}
            >
              About
            </NavLink>
            <NavLink
              to="/Checkout"
              onclick={toggleSideMenu}
              className={"about-button"}
            >
              FAQ
            </NavLink>
            <NavLink
              to="/Checkout"
              onclick={toggleSideMenu}
              className={"about-button"}
            >
              Contact
            </NavLink>
            <NavLink
              to="/Checkout"
              onclick={toggleSideMenu}
              className={"about-button"}
            ></NavLink>
          </div>
        </nav>
      </div>
    </>
  );
};

export default SideMenu;
