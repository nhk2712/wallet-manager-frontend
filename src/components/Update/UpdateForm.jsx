function UpdateForm({type,setType,setDeltaAmount,setTitle,setDescription,notify,updateRequest,setNotify}){
    return (<>
    <div className="signin-form">
                <div>
                    <label className="signin-label field">Type:</label>
                    <button className="updateBtn add" onClick={() => { setType("add");setNotify("") }}>Add</button>
                    <button className="updateBtn omit" onClick={() => { setType("omit");setNotify("") }}>Omit</button>
                    <div className="typeChosen">{(type) ? "You are currently want to: " + type : "Please choose an update type."}</div>
                    <table><tbody>

                        <tr>
                            <td><label className="signin-label field">Amount:</label></td>
                            <td><input type="number" placeholder="0" onChange={(e) => { setDeltaAmount(e.target.value);setNotify("") }} /></td>
                        </tr>
                        <tr>
                            <td><label className="signin-label field">Title:</label></td>
                            <td><input type="text" placeholder="title" onChange={(e) => { setTitle(e.target.value);setNotify("") }} /></td>
                        </tr>
                        <tr>
                            <td><label className="signin-label field">Description:</label></td>
                            <td><textarea placeholder="description" onChange={(e) => { setDescription(e.target.value) }}></textarea></td>
                        </tr>
                    </tbody></table>
                    <div className='update-notify'>{notify}</div>
                </div>
                <button className="signin-button update" onClick={updateRequest}>Update</button>
            </div>
    </>)
}

export default UpdateForm;