import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './App.css'
import SignUp from './components/signup/SignUp';
import LogIn from './components/login/LogIn';
import Home from './components/home/Home';
// import WelcomePage from './components/welcome/WelcomePage';


function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<LogIn/>} />
      <Route path="/signup" element={<SignUp/>} />
      {/* <Route path="/welcome" element={<WelcomePage />} /> */}
    </Routes>
    </BrowserRouter>
  )
}

export default App


