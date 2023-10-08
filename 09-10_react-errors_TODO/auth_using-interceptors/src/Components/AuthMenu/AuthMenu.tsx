import { useSelector } from 'react-redux';
import './AuthMenu.css';
import { RootState } from '../../Redux/Store';
import { NavLink } from 'react-router-dom';
import AuthService from '../../Services/AuthService';
import NotifyService from '../../Services/NotifyService';

function AuthMenu(): JSX.Element {

    const user = useSelector((state: RootState) => state.auth.user);

    async function logout() {
        await AuthService.logout();
        NotifyService.info("We'll miss you");
    }
    return (
        <div className="AuthMenu">
            {
                user
                    ? <>
                        <div>Hello {user.firstName} {user.lastName}</div>
                        <div onClick={logout} className='link'>Log out</div>
                    </>
                    : <>
                        <div>Hello</div>
                        <NavLink to="/login">Log in</NavLink>
                        <NavLink to="/signup">Sign up</NavLink>
                    </>
            }
        </div>
    );
}

export default AuthMenu;
