import React from 'react'
import './app.css'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import Book from './components/Book'


const App=()=>{
    return(
        <>
        {/* <Navbar/> */}
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Navbar/>}></Route> 
                    <Route path='/book' element={<Book/>}></Route>
                </Routes>
            </Router>
        </div>
        <Home/>
        <Main/> 
        <Footer/>
        {/* <Book></Book> */}
        </>
    )
}
export default App;