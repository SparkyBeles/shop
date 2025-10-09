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

          <NavLink
            to="/Details"
            onclick={toggleSideMenu}
            className={"nav-button"}
          >
            Details
          </NavLink>

          <NavLink
            to="/Details"
            onclick={toggleSideMenu}
            className={"nav-button"}
          >
            Details
          </NavLink>

          <NavLink
            to="/Details"
            onclick={toggleSideMenu}
            className={"nav-button"}
          >
            Details
          </NavLink>

          <NavLink
            to="/Details"
            onclick={toggleSideMenu}
            className={"nav-button"}
          >
            Details
          </NavLink>

          <p>Categories</p>

          <NavLink
            to="/Details"
            onclick={toggleSideMenu}
            className={"nav-button"}
          >
            Details
          </NavLink>

          <NavLink
            to="/Details"
            onclick={toggleSideMenu}
            className={"nav-button"}
          >
            Details
          </NavLink>

          <NavLink
            to="/Details"
            onclick={toggleSideMenu}
            className={"nav-button"}
          >
            Details
          </NavLink>

          <NavLink
            to="/Details"
            onclick={toggleSideMenu}
            className={"nav-button"}
          >
            Details
          </NavLink>

          <NavLink
            to="/Details"
            onclick={toggleSideMenu}
            className={"nav-button"}
          >
            Details
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default SideMenu;
