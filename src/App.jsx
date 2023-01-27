import Home from "./components/Home/Home";
import { useState } from "react";

function App() {
  const [userId,setUserId] = useState("");
  return (
    <Home userId={userId}/>
  );
}

export default App;
