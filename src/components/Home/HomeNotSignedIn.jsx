import { Link } from "react-router-dom";

function HomeNotSignedIn(){
    return (<>
    <div className="container home">
        <div className="title">Welcome to WalletManager!</div>
        <div className="buttons-holder">
            <button className="button moreImportant"><Link to="/signin" className="link">Sign in</Link></button>
            <button className="button lessImportant"><Link to="/signup" className="link">Sign up</Link></button>
        </div>
    </div>

    </>)
}

export default HomeNotSignedIn;