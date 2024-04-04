/* eslint-disable no-undef */
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import HomePage from "./components/HomePage";
import ForgotPasswordPage from "./components/ForgotPasswordPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="bg-gradient-to-br from-blue-500 to-green-500 min-h-screen">
        <Routes>
          <Route path="/" exact Component={HomePage} />
          <Route path="/login" Component={Login} />
          <Route path="/forgot-password" Component={ForgotPasswordPage} />
          <Route path="/signup" Component={SignUp} />
        </Routes>
      </div>

    </Router>

  );
}

export default App;
