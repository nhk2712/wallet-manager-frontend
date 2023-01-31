import { Link } from "react-router-dom";

function HomeSignedInLoaded({ user }) {
    return (<>
        <div className="title">Welcome, {user.name}</div>
        <div className="amount">
            <div className="amountTitle">Your money amount:</div>
            <div className="amountNumber">
                <span>{user.amount} </span>
                <span>{user.unit.toUpperCase()}</span>
            </div>
        </div>

        <div className="buttons-holder">
            <button className="button moreImportant"><Link className="link" to="/update">Update amount</Link></button>
            <button className="button lessImportant"><Link className="link" to="/preferences">Preferences</Link></button>
        </div>
    </>)
}

export default HomeSignedInLoaded;