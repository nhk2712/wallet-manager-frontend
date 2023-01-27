import HomeNotSignedIn from './HomeNotSignedIn';
import HomeSignedIn from "./HomeSignedIn";

function Home({ userId }) {
    return (<>
        {
            (userId) ? <HomeSignedIn userId={userId} /> : <HomeNotSignedIn />
        }
    </>)
}

export default Home;