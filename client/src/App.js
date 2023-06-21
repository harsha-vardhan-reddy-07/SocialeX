import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import CreatePost from './components/CreatePost';
import Profile from './pages/Profile';
import HomeLogo from './components/HomeLogo';
import Navbar from './components/Navbar';
import Notifications from './components/Notifications';


function App() {

 

  return (
    <div className="App">

      


      <Routes>

          <Route exact path='/' element={<Home />}  />
          <Route path='/landing' element = {<LandingPage />} />
          <Route path='/profile' element = {<Profile />} />

      </Routes>

      <CreatePost  />
      <Notifications />
      
    </div>
  );
}

export default App;
