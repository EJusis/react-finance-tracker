import React from 'react';
import styles from './Navbar.module.css'
import {Link} from "react-router-dom";
import {useLogout} from "../hooks/useLogout";
import {useAuthContext} from "../hooks/useAuthContext";

const Navbar = () => {
    const {logout} = useLogout()
    const { user } = useAuthContext()
    return (
        <nav className={styles.navbar}>
            <ul>
                <li className={styles.title}>
                    TrackMyMoney
                </li>
                {!user && (
                    <>
                        <li>
                            <Link to='/login'>Login</Link>
                            <Link to='/signup'>Sign up</Link>
                        </li>
                    </>
                )}

                {user && (
                    <>
                        <li>hello, {user.displayName}</li>
                        <li>
                            <button className="btn" onClick={logout}>
                                Logout
                            </button>
                        </li>
                    </>

                )}

            </ul>
        </nav>
    );
};

export default Navbar;