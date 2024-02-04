import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <nav className="Menu">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/list">List</NavLink>
            <NavLink to="/add">Add</NavLink>
        </nav>
    );
}

export default Menu;
