import React,{useState} from 'react'
import './navbar.scss'
import {SiYourtraveldottv} from 'react-icons/si'
import {AiFillCloseSquare} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import {useNavigate} from 'react-router-dom'

const Navbar=()=>{
    // onClick={()=>{nv('/book')}}
    const nv=useNavigate();
    const[active,setActive]=useState('navBar');
    // Function to toggle navBar
    const showNav=()=>{
        setActive('navBar activeNavbar')
    }
    // Function to remove navBar 
    const removeNavbar=()=>{
        setActive('navBar')
    }
    return(
       <section className='navBarSection'>
        <header className='header flex'>
            <div className='logoDiv'>
                <a href='#' className='logo flex'>
                <h1><SiYourtraveldottv className='icon'/> TRAVEL.</h1>
                </a>
            </div>
          
            <div className={active}>
                <ul className='navLists flex'>
                    <li className='navItem'>
                        <a href='#' className='navLink'>Home</a>
                    </li>
                    <li className='navItem'>
                        <a href='#' className='navLink'>Packages</a>
                    </li>
                    <li className='navItem'>
                        <a href='#' className='navLink'>Shop</a>
                    </li>
                    <li className='navItem'>
                        <a href='#' className='navLink'>About</a>

                    </li>
                    <li className='navItem'>
                        <a href='#' className='navLink'>Pages</a>
                    </li>
                    <li className='navItem'>
                        <a href='#' className='navLink'>News</a>
                    </li>
                    <li className='navItem'>
                        <a href='#' className='navLink'>Contact</a>
                    </li>
                    <button  className='btn'>
                       <a href='#' onClick={()=>{nv('/book')}}> BOOK NOW</a>
                    </button>
                    {/* <br></br>
                    <button onClick={()=>{nv('/book')}}>Click habib</button> */}
                </ul>
                <div onClick={removeNavbar} className="closeNavbar">
                <AiFillCloseSquare className='icon'/>
                </div>
            </div>
            <div onClick={showNav} className="toggleNavbar">
           <TbGridDots className='icon'/>
           </div>
        </header>
       </section>
    )
}
export default Navbar;
