import React,{useEffect} from 'react'
import './home.scss';
import video2 from '../../TAT-WEBSITE/video2.mp4'
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
import{FaTripadvisor} from 'react-icons/fa'
import {BsListStars} from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'
import Aos from 'aos'
import 'aos/dist/aos.css'



const Home=()=>{


    useEffect(()=>{
            Aos.init({duration:2000})
    },[])

    return(
       <section className='home'>
        <div className='overlay'></div>
        <video src={video2} muted autoPlay loop type='video/mp4'></video>
        <div className="homeContent container">
            <div className="textDiv">
                <span data-aos='fade-up' className="smallText">
                    Our Packages
                </span>
                <h1 data-aos='fade-up' className="hometitle">
                    Search your holidays
                </h1>
            </div>
            <div data-aos='fade-up' className="cardDiv grid">
                <div className="destinationInput">
                    <label htmlFor="city">
                        Select your destination: </label>
                    <div className="input flex">
                        <input type='text' placeholder='Enter your destination'></input>
                        <GrLocation className='icon'></GrLocation>
                    </div>
                </div>
                <div className="dateInput">
                    <label htmlFor="date">
                        Select your date: </label>
                    <div className="input flex">
                        <input type='date' placeholder='Enter a date'></input>
                    </div>
                </div>
                <div className="priceInput">
                   <div className="label_total flex">
                    <label htmlFor="price">Max Price:</label>
                    <h3 className='total'>₹100000</h3>
                   </div>
                   <div className="input flex">
                    <input type='range' max='500000' min='50000' ></input>
                   </div>
                </div>
                <div className="searchOption flex">
                    <HiFilter className='icon'></HiFilter>
                    <span>MORE FILTERS</span>
                </div>
            </div>
            <div data-aos='fade-up' className="homeFooterIcons flex">
                <div className="rightIcons">
                    <FiFacebook className='icon'></FiFacebook>
                    <AiOutlineInstagram className='icon'></AiOutlineInstagram>
                    <FaTripadvisor className='icon'></FaTripadvisor>
                </div>
                <div className="leftIcons">
                    <BsListStars className='icon'></BsListStars>
                    <TbApps className='icon'></TbApps>
                </div>
            </div>
        </div>
       </section>
    )
}
export default Home;