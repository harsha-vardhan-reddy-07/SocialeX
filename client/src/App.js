import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import CreatePost from './components/CreatePost';
import Profile from './pages/Profile';
import HomeLogo from './components/HomeLogo';
import Navbar from './components/Navbar';
import Notifications from './components/Notifications';
import AuthProtector from './RouteProtectors/AuthProtector';
import LoginProtector from './RouteProtectors/LoginProtector';


function App() {

 

  return (
    <div className="App">

      


      <Routes>

          <Route exact path='/' element={ <AuthProtector><Home/></AuthProtector>}  />
          <Route path='/landing' element = {<LoginProtector> <LandingPage /> </LoginProtector>} />
          <Route path='/profile/:id' element = {<AuthProtector><Profile /></AuthProtector>} />

      </Routes>

      <CreatePost  />
      <Notifications />
      
      
    </div>
  );
}

export default App;
