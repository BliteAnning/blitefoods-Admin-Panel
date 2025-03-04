import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
    return ( 
        <div className="sidebar">
            <div className="options">
                <NavLink to={"/add"} className="option">
                    <img src={assets.add_icon} alt="" />
                    <p>Add items</p>
                </NavLink>
                <NavLink to={"/list"} className="option">
                    <img src={assets.order_icon} alt="" />
                    <p>List items</p>
                </NavLink>
                <NavLink to={"/orders"} className="option">
                    <img src={assets.order_icon} alt="" />
                    <p>Orders</p>
                </NavLink >
            </div>
        </div>
     );
}
 
export default Sidebar;