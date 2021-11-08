import { useState } from 'react';

export const Form = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <>
          <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder='email'
            />
            <input
                value={pass}
                onChange={e => setPassword(e.target.value)}
                placeholder='password'
            />
            <button
                onClick={() => handleClick(email, password)}
            >
                {title}
            </button>  
        </>
    )
}


