function HistoryLoaded({ history }) {
    return (<>
        <ul className="history-ul">
            {
                history.map((item) => <li key={item._id} className="history-li">
                    <div className="history-div">
                        <table><tbody>
                            <tr>
                                <td className="history-label">Type:</td>
                                <td>{item.type}</td>
                            </tr>
                            <tr>
                                <td className="history-label">Amount:</td>
                                <td>{item.deltaAmount}</td>
                            </tr>
                            <tr>
                                <td className="history-label">Title:</td>
                                <td>{item.title}</td>
                            </tr>
                            <tr>
                                <td className="history-label">Description:</td>
                                <td>{item.description}</td>
                            </tr>
                        </tbody></table>
                    </div>
                </li>)
            }
        </ul>
    </>)
}

export default HistoryLoaded;