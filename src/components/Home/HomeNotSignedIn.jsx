import './Home.css';

function HomeNotSignedIn(){
    return (<>
    <div className="container">
        <div className="title">Welcome to WalletManager!</div>
        <div className="buttons-holder">
            <button className="button in">Sign in</button>
            <button className="button up">Sign up</button>
        </div>
    </div>

    </>)
}

export default HomeNotSignedIn;