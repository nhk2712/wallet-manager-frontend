import { Link } from "react-router-dom";

function HomeSignedInLoaded({ user }) {
    function signOut(){
        localStorage.removeItem('userId')
        window.location.href="/"
    }

    return (<>
        <div className="title">Welcome, {user.name}</div>
        <div className="amount">
            <div className="amountTitle">Your money amount:</div>
            <div className="amountNumber">
                <span>{user.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </span>
                <span>{user.unit.toUpperCase()}</span>
            </div>
        </div>

        <div className="buttons-holder">
            <button className="button moreImportant"><Link className="link" to="/update">Update amount</Link></button>
            <button className="button lessImportant"><Link className="link" to="/preferences">Preferences</Link></button>
            <button className="button lessImportant danger" onClick={signOut}>Sign out</button>
        </div>
    </>)
}

export default HomeSignedInLoaded;