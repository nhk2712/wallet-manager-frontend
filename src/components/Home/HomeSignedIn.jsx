import { Link } from "react-router-dom";

function HomeSignedIn({ userId }) {
    const user={
        _id:userId,
        name:"John Doe",
        username:"doe.john",
        hashedPassword:"djdnuddwid",
        amount:2500,
        unit:"usd"
    }

    return (<>
        <div className="container home">
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
        </div>
    </>)
}

export default HomeSignedIn;