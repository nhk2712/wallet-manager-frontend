import "./NotFound.css";
import { Link } from "react-router-dom";

function NotFound() {
    return (<>
        <div className="container">
            <div className="title">404 Not Found!</div>
            <div className="buttons-holder">
                <button className="button moreImportant">
                    <Link to="/" className="link">Return to home</Link>
                </button>
            </div>
        </div>
    </>)
}

export default NotFound;