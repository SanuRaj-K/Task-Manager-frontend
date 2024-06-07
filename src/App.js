import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Register/Login";
import Registration from "./Pages/Register/Registration";
import Lists from "./Components/Lists";
import { Toaster } from "react-hot-toast";
 
function App() {
  return (
    <div className=" ">
       <Toaster/>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/list" element={<Lists />} />
      </Routes>
    </div>
  );
}

export default App;
