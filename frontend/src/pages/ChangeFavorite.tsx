import cookie from 'cookiejs'
import React from 'react'
import axios from '../axios'

export const ChangeFavorite: React.FC<{ favorite: string[]; id: string }> = ({
    favorite,
    id,
}) => {
    async function change_favorite() {
        const username = cookie.get('username').toString()
        if (favorite.includes(username)) {
            await axios.get(
                `recipes/remove_from_favorite/?id=${id}&username=${username}`
            )
            document.location.reload()
        } else {
            await axios.get(
                `recipes/add_to_favorite/?id=${id}&username=${username}`
            )
            document.location.reload()
        }
    }

    return (
        <div className="add_to_favorite">
            <button className="btn btn-secondary" onClick={change_favorite}>
                Избранное
            </button>
        </div>
    )
}
