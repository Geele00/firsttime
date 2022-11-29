import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar";
import Login from "./views/Login";
import Translation from "./views/translation"
import Profile from "./views/Profile"
import "./App.css"

function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/translation" element={<Translation />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
