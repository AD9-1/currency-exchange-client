import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Components/HomePage/Homepage";
import Navbar from "./Components/Navbar/Navbar";
import Sendpage from "./Components/SendPage/Sendpage";
import Register from "./Components/RegisterPage/Register";
import Signin from "./Components/Sign-inPage/Signin";
import Logout from "./Components/Logout/Logout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/send" element={<Sendpage></Sendpage>} />
          <Route path="/convert" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/:userId" element={<Homepage />} />
          <Route path="/logout" element={<Logout />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
