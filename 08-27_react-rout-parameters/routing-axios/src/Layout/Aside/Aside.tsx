import { NavLink } from 'react-router-dom';
import './Aside.css';
import RandomBrand from '../../Components/RandomBrand-State/RandomBrand';


function Aside(): JSX.Element {
    return (
        <div className="Aside">
            <nav>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/reviews">Reviews</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/employees">Employees</NavLink>
                <a> <RandomBrand /></a>
            </nav>

        </div>
    );
}

export default Aside;
