import { Navigate, Route, Routes } from 'react-router-dom';
import './Routing.css';
import Home from '../Home-Conditional/Home';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import About from '../About/About';
import Employees from '../Employees/Employees';
import Details from '../Details/Details';
import PageNotFound from '../PageNotFound/PageNotFound';

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/about" element={<About />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/employees/details/:employeeID" element={<Details />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>

        </div>
    );
}

export default Routing;
