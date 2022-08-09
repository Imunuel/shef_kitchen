import React from 'react'
import axios from '../../axios'

async function registration() {
    const username = (
        document.getElementById('reg_username') as HTMLInputElement | null
    )?.value
    const first_name = (
        document.getElementById('first_name') as HTMLInputElement | null
    )?.value
    const last_name = (
        document.getElementById('last_name') as HTMLInputElement | null
    )?.value
    const email = (
        document.getElementById('reg_email') as HTMLInputElement | null
    )?.value
    const password = (
        document.getElementById('reg_password') as HTMLInputElement | null
    )?.value

    await axios.post('users/actions/create_user/', {
        username: username,
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
    })
}

export const Registration: React.FC = () => {
    return (
        <>
            <div className="registration_form">
                <form action="">
                    <label htmlFor="" className="label_form">
                        Ник пользователя*
                    </label>{' '}
                    <br />
                    <input
                        type="text"
                        className="form-control"
                        id="reg_username"
                    />{' '}
                    <br />
                    <label htmlFor="" className="label_form">
                        Имя пользователя
                    </label>{' '}
                    <br />
                    <input
                        type="text"
                        className="form-control"
                        id="first_name"
                    />{' '}
                    <br />
                    <label htmlFor="" className="label_form">
                        Фамилия пользователя
                    </label>{' '}
                    <br />
                    <input
                        type="text"
                        className="form-control"
                        id="last_name"
                    />{' '}
                    <br />
                    <label htmlFor="" className="label_form">
                        Почта пользователя
                    </label>{' '}
                    <br />
                    <input
                        type="text"
                        className="form-control"
                        id="reg_email"
                    />{' '}
                    <br />
                    <label htmlFor="" className="label_form">
                        Пароль*
                    </label>{' '}
                    <br />
                    <input
                        type="password"
                        className="form-control"
                        id="reg_password"
                    />{' '}
                    <br />
                    <div className="text-center">
                        <button
                            className="btn btn-secondary"
                            onClick={registration}
                        >
                            Зарегистрироваться
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
