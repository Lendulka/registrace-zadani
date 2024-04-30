import './Registration.css'
import { useState } from 'react'

interface FormStructure {
    email: string;
    username: string;
    password: string;
    passwordConfirm: string;
}

interface ErrorStructure {
    email: string;
    passwordConfirm: string;
}

export const Registration = () => {

    const [user, setUser] = useState<FormStructure>({
        email: "",
        username: "",
        password: "",
        passwordConfirm: "",
    })

    const [submit, setSubmit] = useState<boolean>(false)

    const [error, setError] = useState<ErrorStructure>({
        email: "",
        passwordConfirm: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log("stav aktualizován")
    }

    const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let index: number = user.email.indexOf("@")
        if (user.username === "" && index !== (-1)) {
            setError({ ...error, email: "" })
            setUser({ ...user, [e.target.name]: user.email.slice(0, index) })
            console.log(index)
        } else {
            setError({ ...error, email: "Incorrect e-mail format" })
            /*alert("Email musí obsahovat @")*/
            setUser({ ...user, email: "", username: "" })
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (user.password === user.passwordConfirm) {
            setError({ ...error, passwordConfirm: "" })
            setSubmit(true)
            console.log(user)
        } else {
            setError({ ...error, passwordConfirm: "Password does not match" })
            /*alert("Přihlášení nebylo úspěšné.")*/
            setUser({ ...user, password: "", passwordConfirm: "" })
        }
    }

    return (
        <div className="form__container">
            <h1>REGISTRATION</h1>
            {submit ? (
                <div>Login was successful!</div>
            ) : (
                <form className="form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="form__input"
                        name="email"
                        value={user.email}
                        placeholder="Email Address"
                        aria-label="Email Address"
                        onChange={handleChange}
                        required
                        autoFocus
                    />
                    {error.email && <div>{error.email}</div>}
                    <input
                        type="text"
                        className="form__input"
                        name="username"
                        value={user.username}
                        placeholder="User Name"
                        aria-label="User Name"
                        onChange={handleUserChange}
                        autoComplete="off"
                        required
                    />
                    <input
                        type="password"
                        className="form__input"
                        name="password"
                        value={user.password}
                        placeholder="Password"
                        aria-label="Password"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        className="form__input"
                        name="passwordConfirm"
                        value={user.passwordConfirm}
                        placeholder="Confirm Password"
                        aria-label="Confirm Password"
                        onChange={handleChange}
                        required
                    />
                    {error.passwordConfirm && <div>{error.passwordConfirm}</div>}

                    <button className="form__button" type="submit">REGISTER</button>

                </form>
            )}
        </div>
    )
}


