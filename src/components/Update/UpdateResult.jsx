import { Link } from "react-router-dom";

function UpdateResult({ result }) {
    return (<>
        <div className="update-loading">
            {
                (result.msg === "Success") ?
                    <>
                        You have successfully update your wallet!
                        <br />
                        Your amount is now <b>{result.result.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} {result.result.unit.toUpperCase()}</b>.
                    </>
                    : (result.description === "Money not enough") ?
                        <>
                            You do not have enough money to omit!
                            <br />
                            Your amount is only <b>{result.result.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} {result.result.unit.toUpperCase()}</b>.
                        </>
                        :
                        <>
                            An error occured!
                            <br />
                            Error description:
                            <br />
                            {result.description}
                        </>
            }
        </div>
        <button className="signin-button update"><Link className="link" to="/">Back to home</Link></button>
    </>)
}

export default UpdateResult;