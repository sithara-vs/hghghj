import React from 'react'

import video from './video.mp4'
import './Home.css'
import Header from '../Header/Header'
import HeaderLogin from '../Header/HeaderLogin'


export default function Home() {
    return (
      <div className="home">
        <div className="trial">
        <div className="header">
        <Header/>
        <h2 className="frontpage">
           Yoga is critical in each individual’s life, since it keeps up harmony among body and brain. 
           This is the sort of activity that aids in learning physical and mental control through a given practice. 
           It advances interior and outer power by associating body and brain with nature.
           </h2>
        </div>
        
         <div className="vid">
        
        
         <video autoplay loop muted src={video} alt="video"  autoPlay="true" type="video/mp4" ControlBar autoHide ={true}/> 
         
         </div>
         
         </div>
            

         
      
    </div>
    )
}
