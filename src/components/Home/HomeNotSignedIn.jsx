import './Home.css';

function HomeNotSignedIn(){
    return (<>
    <div className="container">
        <div className="title">Welcome to WalletManager!</div>
        <div className="buttons-holder">
            <button className="button moreImportant">Sign in</button>
            <button className="button lessImportant">Sign up</button>
        </div>
    </div>

    </>)
}

export default HomeNotSignedIn;