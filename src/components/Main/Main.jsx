import React,{useEffect} from 'react'
import './main.scss'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import image1 from '../../TAT-WEBSITE/image1.jpg'
import image2 from '../../TAT-WEBSITE/image2.jpg'
import image3 from '../../TAT-WEBSITE/image3.jpg'
import image4 from '../../TAT-WEBSITE/image4.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data=[
    {
        id:1,
        imgSrc:image1,
        destTitle:'Taj Mahal',
        location:'India',
        grade:'MAUSOLEUM',
        fees:'₹10000',
        description:'The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal.'
    },
    {
        id:2,
        imgSrc:image2,
        destTitle:'Phuket Island',
        location:'Thailand',
        grade:'CULTURAL RELAX',
        fees:'₹30000',
        description:'Phuket has a large Chinese influence, so you will see many Chinese shrines and Chinese Restaurants around the City. A Chinese Vegetarian Festival is held there every year. While the Chinese community is quite big, there are many other ethnicities bringing all their traditions and festivals from all over the world to Phuket.'
    },
    {
        id:3,
        imgSrc:image3,
        destTitle:'Ladakh',
        location:'India',
        grade:'CULTURAL RELAX',
        fees:'₹20000',
        description:'Ladakh is most famous for breathtaking landscapes, the crystal clear skies, the highest mountain passes, thrilling adventure activities, Buddhist Monasteries and festivals.'
    },
    {
        id:4,
        imgSrc:image4,
        destTitle:'Maldives',
        location:'South Asia',
        grade:'CULTURAL RELAX',
        fees:'₹100000',
        description:' The Maldives is famous for a number of reasons, including its vibrant culture, pristine beaches, sprawling greenery, and fascinating landmarks. Apart from the numerous enchanting landmarks, Maldives is also famous for water sports and other adventure activities.'
    }
]

const Main=()=>{
    
    useEffect(()=>{
        Aos.init({duration:2000})
},[])

    return(
     <section className='main container section'>
        <div className="secTitle">
            <h3 data-aos='fade-right'className="title">
                Most visited destinations 
            </h3>
        </div>
        <div className="secContent grid">
            {
                Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
                    return(
                        <div key={id} data-aos='fade-up' className="singleDestination">
                            <div className="imageDiv">
                                <img src={imgSrc} alt={destTitle}></img>
                            </div>
                            <div className="cardInfo">
                                <h4 className="destTitle">{destTitle} </h4>
                                <span className="continent flex">
                                    <HiOutlineLocationMarker className='icon'/>
                                    <span className='name'>{location}</span>
                                </span>
                                <div className="fees flex">
                                    <div className="grade">
                                        <span>{grade}<small>+1</small></span>
                                    </div>
                                    <div className="price">
                                        <h5>{fees}</h5>
                                    </div>
                                </div>
                                <div className="desc">
                                    <p>{description}</p>
                                </div>
                                <button className='btn flex'>
                                    DETAILS <HiOutlineClipboardCheck className='icon'/>
                                </button>
                            </div>
                        </div>
                    )
                })
            }

        </div>
     </section>
    )
}
export default Main;