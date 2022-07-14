import React, {useState} from 'react';
import styles from './Signup.module.css'
import {useSignup} from "../../hooks/useSignup";

const Signup = () => {
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signup, isPending, error } = useSignup()

    const handleSubmit = (e) => {
        e.preventDefault()
        signup(email, password, displayName)
    }

    return (
        <form className={styles['signup-form']} onSubmit={handleSubmit}>
            <h2>Sign up</h2>
            <label>
                <span>display name:</span>
                <input
                    type="text"
                    onChange={e => {setDisplayName(e.target.value)}}
                    value={displayName}
                />
            </label>

            <label>
                <span>email:</span>
                <input
                    type="email"
                    onChange={e => {setEmail(e.target.value)}}
                    value={email}
                />
            </label>

            <label>
                <span>password:</span>
                <input
                    type="password"
                    onChange={e => {setPassword(e.target.value)}}
                    value={password}
                />
            </label>
            {!isPending && <button className="btn">Sign up</button>}
            { isPending && <button className='btn' disabled>Loading...</button> }
            { error && <p>{error}</p>}
        </form>
    );
};

export default Signup;