import "./SignUp.css";
import { useState } from "react";

function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const [retypePassword,setRetypePassword]=useState("");
    const [name,setName]=useState("");
    const [initialAmount,setInitialAmount]=useState(0);
    const [unit,setUnit]=useState("");

    return (<>
        <div className="container-signin">
            <div className="title-signin">Sign up</div>
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
                        <input type="checkbox" className="show-checkbox" onChange={(e) => { setShow(e.target.checked) }} /><span className="signin-label check">Show password</span>
                    </span>
                    <table><tbody>
                        <tr>
                            <td><label className="signin-label field">Retype password:</label></td>
                            <td><input type={(show) ? "text" : "password"} placeholder="password" onChange={(e) => { setRetypePassword(e.target.value) }} /></td>
                        </tr>  
                        <tr>
                            <td><label className="signin-label field">Your name:</label></td>
                            <td><input type="text" placeholder="name" onChange={(e) => { setName(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><label className="signin-label field">Initial amount:</label></td>
                            <td><input type="number" placeholder="0" onChange={(e) => { setInitialAmount(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><label className="signin-label field">Currency unit:</label></td>
                            <td><select onChange={(e) => { setUnit(e.target.value) }}>
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
                </div>
                <button className="signin-button">Sign up</button>
            </div>
        </div>
    </>)
}

export default SignUp;