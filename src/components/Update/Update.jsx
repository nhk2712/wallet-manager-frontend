import './Update.css';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import UpdateForm from './UpdateForm';
import UpdateResult from './UpdateResult';

function Update({ userId }) {
    const [type, setType] = useState("");
    const [deltaAmount, setDeltaAmount] = useState(0);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [notify, setNotify] = useState("");

    const [submitted, setSubmitted] = useState(false); //false
    const [loading, setLoading] = useState(true); //true
    const [result, setResult] = useState(""); //""

    if (!userId) return (<Navigate to="/" />);

    function updateRequest() {
        if (type === "") {
            setNotify("Please choose an update type!");
            return;
        }

        if (deltaAmount <= 0) {
            setNotify("Please set your update amount!");
            return;
        }

        if (title === "") {
            setNotify("Please set your update title!");
            return;
        }

        setSubmitted(true);

        const URL = process.env.REACT_APP_BACKEND + `wallet/update/${userId}/${type}/${deltaAmount.toString()}/${title}/${description || "No description"}`;
        try {
            fetch(URL)
                .then(res => res.json())
                .then(data => {
                    setResult(data)
                    setLoading(false)
                })
        }
        catch (err) {
            setResult({ msg: "Error", description: err })
            setLoading(false)
        }
    }

    document.addEventListener("keyup", (e) => { if (e.key === "Enter") updateRequest() })

    return (<>
        <div className="container-signin">
            <div className="title-signin">Update</div>

            {(!submitted) ? <UpdateForm type={type} setType={setType} setDeltaAmount={setDeltaAmount} setTitle={setTitle} setDescription={setDescription} notify={notify} updateRequest={updateRequest} setNotify={setNotify} />
                : (loading) ? <div className="update-loading">Your request is being processed...</div>
                    : <UpdateResult result={result} />
            }
        </div>
    </>)
}

export default Update;