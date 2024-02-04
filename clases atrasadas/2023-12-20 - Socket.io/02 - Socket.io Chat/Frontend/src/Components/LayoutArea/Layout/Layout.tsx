import { ReactNotifications } from "react-notifications-component";
import Header from "../Header/Header";
import Routing from "../Routing/Routing";
import "./Layout.css";
import 'react-notifications-component/dist/theme.css';
import Home from "../../HomeArea/Home/Home";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
            
            <Home />

            <ReactNotifications  />
			
        </div>
    );
}

export default Layout;
