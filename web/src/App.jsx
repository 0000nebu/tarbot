import { Routes, Route, Navigate } from "react-router-dom";


import HomePage from "./pages/HomePage/HomePage"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import ProfilePage from "./pages/ProfilePage"
import InstructionsPage from "./pages/InstructionsPage"
import SingleReadingPage from "./pages/SingleReadingPage"
import MultiReadingPage from "./pages/MultireadingPage/MultiReadingPage"
import MenuPage from './pages/MenuPage/MenuPage'




function App() {
  

  return (
    <div className="App">
      

      <Routes> 
        <Route path='/' element={<HomePage/>}/>//loremipsum+button
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signUp' element={<SignUpPage/>}/>
        <Route path='/doSomething' element={<MenuPage />}/>//buttons
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/howItWorks' element={<InstructionsPage/>}/> //loremipsum
        <Route path='/single-reading' element={<SingleReadingPage/>}/>
        <Route path='/multi-reading' element={<MultiReadingPage/>}/>
        <Route path='*' element={<Navigate to="/"/>}/>
      </Routes>

      

    </div>
  );
}

export default App
