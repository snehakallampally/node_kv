import { Outlet } from "react-router-dom";
import Logo from "../assets/kv-logo.png";
import "../pages/styles.scss";
import SideNav from "../componenets/SideNav";
import { useOutletContext } from "react-router-dom";
import { useReducer } from "react";
import reducer from "../Store/usereducer";
import employees from "../constants/dummy";

const HomeLayout = () => {
  const [state, dispatch] = useReducer(reducer, { employees: employees });
  
  return (
    <div className="page">
      <header>
        <div className="logo">
          <img src={Logo} alt="logo" height="40px" width="250px" />
        </div>
      </header>
      <div className="parent">
        <SideNav />
        <Outlet context={{ state, dispatch }} />
      </div>
    </div>
  );
};
export default HomeLayout;
