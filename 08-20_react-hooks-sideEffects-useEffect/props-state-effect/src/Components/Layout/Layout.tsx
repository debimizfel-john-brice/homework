import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from '../Home-Conditional/Home';
import Links from '../Links/Links';
import Title from '../Title-Effect/Title';
import './Layout.css';

function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <Title title='Shoes store'></Title>
            <header>
                <Header />
            </header>
            <aside>
                <Links />
            </aside>
            <main>
                <Home />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Layout;
