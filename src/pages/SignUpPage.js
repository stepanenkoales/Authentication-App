import { Link } from 'react-router-dom';
import { SignUp } from 'components/SignUp';
import '../styles/styles.css';

export const SignUpPage = () => {
    return (
        <div className='container'>
            <div className='heading'>SignUp</div>
                <SignUp/>
            <div className='text'>
                Already have an account? 
                <Link to='/login' >
                    <p>Login</p>
                </Link>
            </div>
        </div>
    )
}