import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeUser } from 'store/userCreateSlice';
import { useSelector } from 'react-redux';
import '../styles/styles.css';

export const HomePage = () => {
    const dispatch = useDispatch();
    const { email } = useSelector(state => state.user);
    const isAuth = !!email;
    return isAuth ? (
        <div>
            <h1>Welcome</h1>

            <button className='loginBtn'
                onClick={()=> dispatch(removeUser())}
            >Log out from {email}</button>
        </div>
        ) : (
            <Navigate to='/login' />
        )
}