import { useState } from 'react';
import '../styles/styles.css';

export const Form = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <>
            <div className='box'>
                <p>email</p>               
                <input
                    value={email}
                    placeholder='Enter your email'
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className='box'>
                <p>password</p>
                <input
                    type='password'
                    value={password}
                    placeholder='Enter your password'
                    onChange={e => setPassword(e.target.value)}              
                />
            </div>    
            <button className='loginBtn'
                onClick={() => handleClick(email, password)}
            >
                {title}
            </button>  
        </>
    )
}


