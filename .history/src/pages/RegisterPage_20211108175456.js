import { Link } from 'react-router-dom';
import { Register } from 'components/Register';

export const RegisterPage = () => {
    return (
        <div>
            <h1>Register</h1>
            <Register />
            <p>
                Already have an account? <Link to='/login' >Sign in</Link>
            </p>
        </div>
    )
}