import "./Preferences.css"
import { Navigate } from 'react-router-dom';

function Preferences({userId}){
    if (!userId) return(<Navigate to="/" />)

    return (<></>)
}

export default Preferences;