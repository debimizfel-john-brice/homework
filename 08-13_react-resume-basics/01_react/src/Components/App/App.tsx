import Details from '../Details/Details';
import Header from '../Header/Header';
import Skills from '../Skills/Skills';
import './App.css';

function App(): JSX.Element {
    return (
        <div className="App">
            <header>
                <Header></Header>
            </header>
            <main>
                <div className='main'>
                    <Details></Details>
                    <Skills></Skills>
                </div>
            </main>
        </div>
    );
}

export default App;
