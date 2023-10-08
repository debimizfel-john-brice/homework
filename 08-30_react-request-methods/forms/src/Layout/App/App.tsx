import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Title from '../../Components/Title-Effect/Title';
import './App.css';
import Routing from '../../Pages/Routing/Routing';
import Aside from '../Aside/Aside';

function App(): JSX.Element {
    return (
        <div className="App">
            <Title title='Shoes store'></Title>
            <header>
                <Header />
            </header>
            <aside>
                <Aside />
            </aside>
            <main>
                <Routing />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default App;
