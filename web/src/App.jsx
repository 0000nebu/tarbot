import { Routes, Route, Navigate } from "react-router-dom";


import HomePage from "./pages/HomePage/HomePage"
import LoginPage from "./pages/LoginPage/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import ProfilePage from "./pages/ProfilePage"
import InstructionsPage from "./pages/InstructionsPage/InstructionsPage"
import SingleReadingPage from "./pages/SingleReadingPage/SingleReadingPage"
import MultiReadingPage from "./pages/MultireadingPage/MultiReadingPage"
import MenuPage from './pages/MenuPage/MenuPage'
import ReadingMenu from "./pages/ReadingMenu/ReadingMenu";
import ReadingDetail from "./pages/ReadingDetail";
import NavBar from "./components/NavBar/Navbar";




function App() {
  

  return (
    <div className="App">
      
      <NavBar />

      <Routes> 
        <Route path='/' element={<HomePage/>}/>//loremipsum+button
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signUp' element={<SignUpPage/>}/>
        <Route path='/doSomething' element={<MenuPage />}/>//buttons
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/profile/:id' element={<ReadingDetail/>}/>
        <Route path='/howItWorks' element={<InstructionsPage/>}/> //loremipsum
        <Route path='/reading-type' element={<ReadingMenu/>}/>
        <Route path='/single-reading' element={<SingleReadingPage/>}/>
        <Route path='/multi-reading' element={<MultiReadingPage/>}/>
        <Route path='*' element={<Navigate to="/"/>}/>
      </Routes>

      

    </div>
  );
}

export default App
