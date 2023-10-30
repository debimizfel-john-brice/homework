import AuthMenu from '../../Components/AuthMenu/AuthMenu';
import './Header.css';

function Header(): JSX.Element {
    return (
        <div className="Header">
            <span></span>
            <h1>Shoes store</h1>
            <AuthMenu/>
        </div>
    );
}

export default Header;
