
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import UsersList from "./components/UsersList";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<UsersList />} />
      </Routes>
    </Router>
  );
}



export default App;