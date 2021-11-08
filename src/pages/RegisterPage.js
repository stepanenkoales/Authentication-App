import { Link } from 'react-router-dom';
import { SignIn } from 'components/SignIn';

export const RegisterPage = () => {
    return (
        <div>
            <h1>Register</h1>
            <SignIn />

            <p>
                Already have an account? <Link to='/login' >Sign in</Link>
            </p>
        </div>
    )
}