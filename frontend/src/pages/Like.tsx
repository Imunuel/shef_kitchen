import cookie from 'cookiejs'
import React from 'react'
import axios from '../axios'

export const Like: React.FC<{ likes: string[]; id: string }> = ({
    likes,
    id,
}) => {
    const username = cookie.get('username').toString()

    async function ChangeLike() {
        if (likes.includes(username)) {
            await axios.get(`recipes/dislike/?username=${username}&id=${id}`)
        } else {
            await axios.get(`recipes/like/?username=${username}&id=${id}`)
        }
    }

    if (likes.includes(username)) {
        return (
            <button
                className="rounded-full bg-red-500 w-9 h-9 ml-2.5"
                onClick={ChangeLike}
            ></button>
        )
    } else {
        return (
            <button
                className="rounded-full bg-slate-200 w-9 h-9 ml-2.5"
                onClick={ChangeLike}
            ></button>
        )
    }
}
