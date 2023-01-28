import './Update.css';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';

function Update({ userId }) {
    const [type, setType] = useState("");
    const [deltaAmount, setDeltaAmount] = useState(0);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    if (!userId) return (<Navigate to="/" />);

    return (<>
        <div className="container-signin">
            <div className="title-signin">Update</div>
            <div className="signin-form">
                <div>
                    <label className="signin-label field">Type:</label>
                    <button className="updateBtn add" onClick={() => { setType("add") }}>Add</button>
                    <button className="updateBtn omit" onClick={() => { setType("omit") }}>Omit</button>
                    <div className="typeChosen">{(type) ? "You are currently want to: " + type : "Please choose an update type."}</div>
                    <table><tbody>

                        <tr>
                            <td><label className="signin-label field">Amount:</label></td>
                            <td><input type="number" placeholder="0" onChange={(e) => { setDeltaAmount(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><label className="signin-label field">Title:</label></td>
                            <td><input type="text" placeholder="title" onChange={(e) => { setTitle(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><label className="signin-label field">Description:</label></td>
                            <td><textarea placeholder="description" onChange={(e) => { setDescription(e.target.value) }}></textarea></td>
                        </tr>
                    </tbody></table>
                </div>
                <button className="signin-button update">Update</button>
            </div>
        </div>
    </>)
}

export default Update;