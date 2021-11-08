import { Login } from 'components/Login';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

export const LoginPage = () => {
    return (
        <div className='container'>
            <div className='heading'>Login</div>
                <Login/>
            <div className='text'>
                Don't have an account? <Link to='/register' >Register</Link>
            </div>
        </div>
    )
}