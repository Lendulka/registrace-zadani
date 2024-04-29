import './Registration.css'
import { useState } from 'react'

interface FormStructure {
    email: string;
    username: string;
    password: string;
    passwordConfirm: string;
}

export const Registration = () => {

    const [user, setUser] = useState<FormStructure>({
        email: "",
        username: "",
        password: "",
        passwordConfirm: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log("stav aktualizován")
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(user)
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                className="form__input"
                name="email"
                value={user.email}
                placeholder="Email Address"
                aria-label="Email Address"
                onChange={handleChange}
                required
                autoFocus
            />
            <input
                className="form__input"
                name="username"
                value={user.username}
                placeholder="User Name"
                aria-label="User Name"
                onChange={handleChange}
                required
            />
            <input
                className="form__input"
                name="password"
                value={user.password}
                placeholder="Password"
                aria-label="Password"
                onChange={handleChange}
                required
            />
            <input
                className="form__input"
                name="passwordConfirm"
                value={user.passwordConfirm}
                placeholder="Confirm Password"
                aria-label="Confirm Password"
                onChange={handleChange}
                required
            />

            <button className="form__button" type="submit">REGISTER</button>

        </form>
    )
}


