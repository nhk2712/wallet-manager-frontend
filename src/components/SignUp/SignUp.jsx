import "./SignUp.css";
import { useState } from "react";
import { sha256 } from "js-sha256";

function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const [retypePassword, setRetypePassword] = useState("");
    const [name, setName] = useState("");
    const [initialAmount, setInitialAmount] = useState(0);
    const [unit, setUnit] = useState("");
    const [notify, setNotify] = useState("");

    function signUpRequest() {
        if (username === "") {
            setNotify("Please enter your username!")
            return
        }

        setNotify(<span style={{ color: 'black' }}>Loading...</span>)
        const checkUsernameUrl = process.env.REACT_APP_BACKEND + `user/checkusername/${username}`;
        var isUsernameExist;
        fetch(checkUsernameUrl)
            .then(res => res.json())
            .then(data => { isUsernameExist = data.result })
        if (isUsernameExist === "Exist") {
            setNotify("Username already exists!")
            return
        }

        if (password === "") {
            setNotify("Please enter your password!")
            return
        }

        if (retypePassword !== password) {
            setNotify("Please retype the same password!")
            return
        }

        if (name === "") {
            setNotify("Please enter your name!")
            return
        }

        if (initialAmount === "") {
            setNotify("Please enter your initial amount of money!")
            return
        }

        if (unit === "") {
            setNotify("Please select your currency unit!")
            return
        }

        const hashedPassword = sha256(password);
        setNotify(<span style={{ color: 'black' }}>Loading...</span>)

        const URL = process.env.REACT_APP_BACKEND + `user/signup/${username}/${hashedPassword}/${name}/${initialAmount}/${unit}`;
        fetch(URL)
        .then(res=>res.json())
        .then(data=>{
            localStorage.setItem('userId',data.result._id)
            window.location.href="/"
        })
    }

    document.addEventListener('keyup', (e) => { if (e.key === "Enter") signUpRequest() })

    return (<>
        <div className="container-signin">
            <div className="title-signin">Sign up</div>
            <div className="signin-form">
                <div>
                    <table><tbody>
                        <tr>
                            <td><label className="signin-label field">Username:</label></td>
                            <td><input type="text" placeholder="username" onChange={(e) => { setUsername(e.target.value); setNotify("") }} /></td>
                        </tr>
                        <tr>
                            <td><label className="signin-label field">Password:</label></td>
                            <td><input type={(show) ? "text" : "password"} placeholder="password" onChange={(e) => { setPassword(e.target.value); setNotify("") }} /></td>
                        </tr>
                    </tbody></table>
                    <span>
                        <input type="checkbox" className="show-checkbox" onChange={(e) => { setShow(e.target.checked) }} /><span className="signin-label check">Show password</span>
                    </span>
                    <table><tbody>
                        <tr>
                            <td><label className="signin-label field">Retype password:</label></td>
                            <td><input type={(show) ? "text" : "password"} placeholder="password" onChange={(e) => { setRetypePassword(e.target.value); setNotify("") }} /></td>
                        </tr>
                        <tr>
                            <td><label className="signin-label field">Your name:</label></td>
                            <td><input type="text" placeholder="name" onChange={(e) => { setName(e.target.value); setNotify("") }} /></td>
                        </tr>
                        <tr>
                            <td><label className="signin-label field">Initial amount:</label></td>
                            <td><input type="number" placeholder="0" onChange={(e) => { setInitialAmount(e.target.value); setNotify("") }} /></td>
                        </tr>
                        <tr>
                            <td><label className="signin-label field">Currency unit:</label></td>
                            <td><select onChange={(e) => { setUnit(e.target.value); setNotify("") }}>
                                <option selected disabled>-- Choose currency unit --</option>
                                <option value="vnd">VND (Vietnam)</option>
                                <option value="usd">USD (America)</option>
                                <option value="sgd">SGD (Singapore)</option>
                                <option value="gbp">GBP (Britain)</option>
                                <option value="aud">AUD (Australia)</option>
                                <option value="krw">KRW (South Korea)</option>
                                <option value="jpy">JPY (Japan)</option>
                                <option value="cny">CNY (China)</option>
                            </select></td>
                        </tr>
                    </tbody></table>
                    <div className="update-notify">{notify}</div>
                </div>
                <button className="signin-button" onClick={signUpRequest}>Sign up</button>
            </div>
        </div>
    </>)
}

export default SignUp;