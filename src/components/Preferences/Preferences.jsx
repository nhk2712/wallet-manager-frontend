import "./Preferences.css"
import { Navigate } from 'react-router-dom';

function Preferences({ userId }) {
    if (!userId) return (<Navigate to="/" />)

    const history = [
        { _id: "77431653", user: "123456", type: "add", deltaAmount: 500, title: "Hello world", description: "Add money to wallet" },
        { _id: "84298949", user: "123456", type: "add", deltaAmount: 500, title: "Xin chào", description: "Thêm tiền vào ví" },
        { _id: "77431653", user: "123456", type: "add", deltaAmount: 500, title: "Hello world", description: "Add money to wallet" },
        { _id: "77431653", user: "123456", type: "add", deltaAmount: 500, title: "Hello world", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { _id: "77431653", user: "123456", type: "add", deltaAmount: 500, title: "Hello world", description: "Add money to wallet" }
    ]

    return (<>
        <div className="container-signin preferences">
            <div className="title-signin">Preferences</div>
            <div>
                <div className="preferences-heading">Update history</div>
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
            </div>
        </div>
    </>)
}

export default Preferences;