import { Link } from 'react-router-dom';
import { Register } from 'components/Register';
import '../styles/styles.css';

export const RegisterPage = () => {
    return (
        <div className='container'>
            <div className='heading'>Register</div>
                <Register/>
            <div className='text'>
                Already have an account? <Link to='/login' >Login</Link>
            </div>
        </div>
    )
}