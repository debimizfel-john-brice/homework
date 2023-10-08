import { useNavigate } from 'react-router-dom';
import Card from '../../Components/Card/Card';
import './SignUp.css';
import { useForm } from 'react-hook-form';
import { UserModel } from '../../Models/UserModel';
import AuthService from '../../Services/AuthService';
import NotifyService from '../../Services/NotifyService';

function SignUp(): JSX.Element {

    const { register, handleSubmit } = useForm<UserModel>();
    const navigation = useNavigate();

    async function save(user: UserModel) {
        try {
            await AuthService.signup(user);
            NotifyService.success("Welcome " + user.firstName);
            navigation("/home");

        } catch (error: any) {
            NotifyService.error(error.message);
        }
    }

    return (
        <div className="SignUp">
            <Card width={300}>
                <form onSubmit={handleSubmit(save)}>
                    <h2>Sign up</h2>
                    <div className='input'>
                        <label>First Name: </label>
                        <input type="text" {...register("firstName")} />
                    </div>
                    <div className='input'>
                        <label>Last Name: </label>
                        <input type="text" {...register("lastName")} />
                    </div>
                    <div className='input'>
                        <label>Email: </label>
                        <input type="email" {...register("email")} />
                    </div>
                    <div className='input'>
                        <label>Password: </label>
                        <input type="password" {...register("password")} />
                    </div>
                    <button>Sign up</button>
                </form>
            </Card>
        </div>
    );
}

export default SignUp;
