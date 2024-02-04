import { Route, Routes } from "react-router-dom";
import "./Routing.css";
import Home from "../../HomeArea/Home/Home";
import RouteNotFound from "../RouteNotFound/RouteNotFound";

function Routing(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<RouteNotFound />} />
        </Routes>
    );
}

export default Routing;
