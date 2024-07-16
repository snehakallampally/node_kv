import Icon from "../assets/icon.svg";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <aside>
      <Link to="/employees">
        <div className="sidenav">
          <div className="sideicon">
            <img src={Icon} />
          </div>
          <div className="sidetxt">Employee List</div>
        </div>
      </Link>
      <Link to="create">
        <div className="sidenav">
          <div className="sideicon">
            <img src={Icon} />
          </div>
          <div className="sidetxt">Create Employee</div>
        </div>
      </Link>
      <Link to="/">
        <div className="sidenav">
          <div className="sideicon">
            <img src={Icon} />
          </div>
          <div className="sidetxt" >Logout</div>
        </div>
      </Link>
      
    </aside>
  );
};
export default SideNav;
