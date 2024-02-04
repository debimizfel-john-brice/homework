import { ReactNotifications } from "react-notifications-component";
import Header from "../Header/Header";
import Routing from "../Routing/Routing";
import "./Layout.css";
import "@picocss/pico";
import 'react-notifications-component/dist/theme.css'

function Layout(): JSX.Element {
    return (
        <div className="Layout container">

            <Header />

            <main>
                <Routing />
            </main>

            <ReactNotifications />
        </div>
    );
}

export default Layout;
