import {Routes,Route} from "react-router-dom"
import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ProfilePage from './pages/ProfilePage';
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route element={<PrivateRoute/>}>
        <Route path="/profile" element={<ProfilePage/>}/>
      </Route>
    </Routes>
    
  );
}

export default App;
