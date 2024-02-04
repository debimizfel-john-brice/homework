import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <nav className="Menu ">
            <ul>
                <li><strong>Cinema</strong></li>
            </ul>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/list">List</NavLink></li>
                <li> <NavLink to="/add">Add</NavLink></li>
            </ul>
        </nav>
    );
}

export default Menu;
