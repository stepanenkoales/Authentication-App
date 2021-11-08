import { useState } from 'react';
import '../styles/styles.css';

export const Form = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <>
            <div className='box'>
                <p>email</p> 
                <div>             
                    <input
                        value={email}
                        placeholder='Enter your email'
                        onChange={e => setEmail(e.target.value)}
                    />
                </div> 
            </div>
            <div className='box'>
                <p>password</p>
                <div>
                    <input
                        type='password'
                        value={password}
                        placeholder='Enter your password'
                        onChange={e => setPassword(e.target.value)}              
                    />
                </div>
            </div>    
            <button className='loginBtn'
                onClick={() => handleClick(email, password)}
            >
                {title}
            </button>  
        </>
    )
}


