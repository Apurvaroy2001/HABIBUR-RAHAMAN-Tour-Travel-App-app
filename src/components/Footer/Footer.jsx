import React ,{useEffect}from 'react'
import './footer.scss'
import video1 from '../../TAT-WEBSITE/video1.mp4'
import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {FiChevronRight} from 'react-icons/fi'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer=()=>{
    useEffect(()=>{
        Aos.init({duration:2000})
},[])

    return(
      <section className="footer">
        <div className="videoDiv">
            <video src={video1} loop autoPlay muted type='video1/mp4'></video>
        </div>
        <div className="secContent container">
            <div className="contactDiv flex">
                <div data-aos='fade-up' className="text">
                    <small>KEEP IN TOUCH</small>
                    <h2>Travel with us</h2>
                </div>
                <div data-aos='fade-up' className="inputDiv flex">
                    <input type='text' placeholder='Enter your email'/>
                    <button data-aos='fade-up'  className='btn flex' type='submit'>
                        <FiSend className='icon'></FiSend>
                    </button>
                </div>
            </div>
           <div data-aos='fade-up' className="footerCard flex">
            <div className="footerIntro flex">
                <div className="logoDiv">
                    <a href='' className='logo flex'>
                        <MdOutlineTravelExplore className='icon'/>Travel.</a>
                </div>
                <div className="footerParagraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus asperiores illo iusto unde ad quidem iure totam dicta illum perferendis ipsum natus obcaecati magnam voluptate laudantium, praesentium necessitatibus, vitae corrupti?
                </div>
                <div className="footerSocials">
                    <AiOutlineTwitter className='icon'/>
                    <AiFillYoutube className='icon'/>
                    <AiFillInstagram className='icon'/>
                    <FaTripadvisor className='icon'/>
                </div>
            </div>
            <div className="footerLinks grid">
                {/* //first phase// */}
                <div className="linkGroup">
                <span className="groupTitle">
                    OUR AGENCY
                </span>
                <li className="footerList flex">
                    <FiChevronRight className='icon'/>Services
                </li>
                <li className="footerList flex">
                    <FiChevronRight className='icon'/>Insurance
                </li>
                <li className="footerList flex">
                    <FiChevronRight className='icon'/>Agency
                </li>
                <li className="footerList flex">
                    <FiChevronRight className='icon'/>Tourism
                </li>
                  <li className="footerList flex">
                    <FiChevronRight className='icon'/>Payment
                </li>
             </div>
            
             {/* //second phase// */}
             <div className="linkGroup">
                <span className="groupTitle">
                    PARTNERS
                </span>
                <li className="footerList flex">
                    <FiChevronRight className='icon'/>Bookings
                </li>
                <li className="footerList flex">
                    <FiChevronRight className='icon'/>Rentcars
                </li>
                <li className="footerList flex">
                    <FiChevronRight className='icon'/>HostelWorld
                </li>
                <li className="footerList flex">
                    <FiChevronRight className='icon'/>Trivago
                </li>
                  <li className="footerList flex">
                    <FiChevronRight className='icon'/>TripAdvisor
                </li>
             </div>
             {/* //third phase// */}
             <div className="linkGroup">
                <span className="groupTitle">
                    LAST MINUTE
                </span>
                <li className="footerList flex">
                    <FiChevronRight className='icon'/>London
                </li>
                <li className="footerList flex">
                    <FiChevronRight className='icon'/>Kalifornia
                </li>
                <li className="footerList flex">
                    <FiChevronRight className='icon'/>Indonesia
                </li>
                <li className="footerList flex">
                    <FiChevronRight className='icon'/>Oceania
                </li>
                  <li className="footerList flex">
                    <FiChevronRight className='icon'/>Payment
                </li>
             </div>
            </div>
            <div className="footerDiv flex">
              <small>BEST TRAVEL WEBSITE THEME</small>
              <small>COPYRIGHTS RESERVED--ISRATECH 2023</small>
            </div>
           </div>
        </div>
      </section>
    )
}
export default Footer;