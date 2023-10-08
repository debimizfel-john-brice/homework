import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Links from '../Links/Links';
import './Layout.css';

function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <header>
                <Header></Header>
            </header>
            <aside>
                <Links></Links>
            </aside>
            <main>
                <Home></Home>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
}

export default Layout;
