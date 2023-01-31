import { useState } from "react";
import HomeSignedInLoaded from "./HomeSignInLoaded";

function HomeSignedIn({ userId }) {
    const [user, setUser] = useState(null);
    const URL = process.env.REACT_APP_BACKEND + "user/userinfo/" + userId;

    fetch(URL)
        .then(res => res.json())
        .then(data => setUser(data))

    return (<>
        <div className="container home signedin">
            {(!user) ? <div className="title">Loading...</div> : <HomeSignedInLoaded user={user} />}
        </div>
    </>)
}

export default HomeSignedIn;