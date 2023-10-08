import { useForm } from 'react-hook-form';
import Card from '../../Components/Card/Card';
import './LogIn.css';
import { useNavigate } from 'react-router-dom';
import { CredentialsModel } from '../../Models/UserModel';
import AuthService from '../../Services/AuthService';

function LogIn(): JSX.Element {

    const { register, handleSubmit } = useForm<CredentialsModel>();
    const navigation = useNavigate();

    async function save(credentials: CredentialsModel) {
        try {
            await AuthService.login(credentials);
            alert("Welcome back!");
            navigation("/home");

        } catch (error: any) {
            alert(error.message);
        }
    }

    return (
        <div className="LogIn">
            <Card width={300}>
                <form onSubmit={handleSubmit(save)}>
                    <h2>Log in</h2>
                    <div className='input'>
                        <label>Email: </label>
                        <input type="email" {...register("email")} />
                    </div>
                    <div className='input'>
                        <label>Password: </label>
                        <input type="password" {...register("password")} />
                    </div>
                    <button>Log in</button>
                </form>
            </Card>
        </div>
    );
}

export default LogIn;
