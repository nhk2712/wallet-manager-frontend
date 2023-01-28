function HomeSignedIn({ userId }) {
    return (<>
        <div className="container home">
            <div className="title">Welcome, John Doe</div>
            <div className="amount">
                <div className="amountTitle">Your money amount:</div>
                <div className="amountNumber">
                    <span>2500 </span>
                    <span>USD</span>
                </div>
            </div>
            
        <div className="buttons-holder">
            <button className="button moreImportant">Update amount</button>
            <button className="button lessImportant">Preferences</button>
        </div>
        </div>
    </>)
}

export default HomeSignedIn;