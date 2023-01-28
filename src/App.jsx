import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Update from "./components/Update/Update";
import Preferences from "./components/Preferences/Preferences";
import NotFound from "./components/NotFound/NotFound";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";

function App() {
  const [userId, setUserId] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">

          <Route index element={<Home userId={userId} />} />

          <Route path="update" element={<Update />} />
          <Route path="preference" element={<Preferences />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />

          <Route path="*" element={<NotFound />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
