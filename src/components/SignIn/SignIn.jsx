import "./SignIn.css";
import { useState } from "react";
import { sha256 } from "js-sha256";

function SignIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const [notify, setNotify] = useState("");

    function signInRequest() {
        if (username === "") {
            setNotify("Please enter your username!")
            return
        }

        if (password === "") {
            setNotify("Please enter your password!")
            return
        }

        setNotify(<span style={{ color: 'black' }}>Loading...</span>)
        const hashedPassword = sha256(password);

        const URL = process.env.REACT_APP_BACKEND + `user/signin/${username}/${hashedPassword}`;
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                if (data.msg === "Error") {
                    if (data.description === "Username not found") setNotify("Username not found!");
                    else if (data.description === "Wrong password") setNotify("Password is wrong!");
                    else setNotify((<>An error occured! Error description:<br />{data.description}</>))
                }
                else {
                    localStorage.setItem('userId', data._id)
                    window.location.href = "/"
                }
            })
    }

    document.addEventListener('keyup', (e) => { if (e.key === "Enter") signInRequest() })

    return (<>
        <div className="container-signin">
            <div className="title-signin">Sign in</div>
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
                    <div className="update-notify">{notify}</div>
                </div>
                <button className="signin-button" onClick={signInRequest}>Sign in</button>
            </div>
        </div>
    </>)
}

export default SignIn;