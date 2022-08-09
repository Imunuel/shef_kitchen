import cookie from 'cookiejs'
import React from 'react'
import { NavLink } from 'react-router-dom'
import './Profile.css'

export const Login: React.FC = () => {
    const LogIn = () => {
        const username_input = (
            document.getElementById('username') as HTMLInputElement | null
        )?.value
        cookie.set('username', username_input)
    }

    return (
        <>
            <form className="login_form">
                <div className="form-outline mb-4">
                    <label className="form-label m-1" htmlFor="form2Example1">
                        Username
                    </label>
                    <input
                        type="email"
                        id="username"
                        className="form-control"
                    />
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label m-1">email</label>
                    <input type="text" id="email" className="form-control" />
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label m-1">Password</label>
                    <input type="password" className="form-control" />
                </div>
                <div className="text-center">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={LogIn}
                    >
                        Sign in
                    </button>
                </div>
                <div className="text-center">
                    <p>
                        Not a member?{' '}
                        <NavLink to={'/registration'} className="colored_link">
                            Register
                        </NavLink>
                    </p>
                </div>
            </form>
        </>
    )
}
