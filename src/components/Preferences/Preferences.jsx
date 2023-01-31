import "./Preferences.css"
import { Navigate } from 'react-router-dom';
import { useState } from "react";
import HistoryLoaded from "./HistoryLoaded";

function Preferences({ userId }) {
    const [history, setHistory] = useState(null);
    if (!userId) return (<Navigate to="/" />)

    const URL = process.env.REACT_APP_BACKEND + "wallet/history/" + userId;
    fetch(URL)
        .then(res => res.json())
        .then(data => setHistory(data))

    return (<>
        <div className="container-signin preferences">
            <div className="title-signin">Preferences</div>
            <div>
                <div className="preferences-heading">Update history</div>
                {(!history) ? <div>Loading...</div> : <HistoryLoaded history={history} />}
            </div>
        </div>
    </>)
}

export default Preferences;