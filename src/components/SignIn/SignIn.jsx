import "./SignIn.css";
import { useState } from "react";

function SignIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);

    return (<>
        <div className="container-signin">
            <div className="title-signin">Sign in</div>
            <div className="signin-form">
                <div>
                    <table><tbody>
                        <tr>
                            <td><label className="signin-label field">Username:</label></td>
                            <td><input type="text" placeholder="username" onChange={(e) => { setUsername(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><label className="signin-label field">Password:</label></td>
                            <td><input type={(show) ? "text" : "password"} placeholder="password" onChange={(e) => { setPassword(e.target.value) }} /></td>
                        </tr>
                    </tbody></table>
                    <span>
                        <input type="checkbox" className="show-checkbox" onChange={(e)=>{setShow(e.target.checked)}}/><span className="signin-label check">Show password</span>
                    </span>
                </div>
                <button className="signin-button">Sign in</button>
            </div>
        </div>
    </>)
}

export default SignIn;