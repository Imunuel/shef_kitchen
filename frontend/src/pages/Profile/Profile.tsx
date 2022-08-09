import cookie from 'cookiejs'
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from '../../axios'
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux'
import { FetchProfile } from '../../store/reducers/ActionRecipes'

import './Profile.css'

export const Profile: React.FC = ({}) => {
    const dispatch = useAppDispatch()

    const { profile, isLoading, error } = useAppSelector(
        (state) => state.ProfileReducer
    )

    useEffect(() => {
        dispatch(FetchProfile(cookie.get('username').toString()))
    }, [])

    return (
        <>
            <div className="profile_info">
                <label htmlFor="">Username: {profile.username}</label>
                <br />
                <label htmlFor="">First name</label>
                <input type="text" placeholder={profile.first_name} />
                <br />
                <label htmlFor="">Last name</label>
                <input type="text" placeholder={profile.last_name} />
                <br />
                <label htmlFor="">Email</label>
                <input type="text" placeholder={profile.email} />
                <br />
            </div>
        </>
    )
}
