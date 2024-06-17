import React from 'react'
import '../styles/About.css';
import {Experiences} from '../Helpers/Experiences';
import ExperiencesItems from '../components/ExperiencesItems';
import { keys } from '@material-ui/core/styles/createBreakpoints';
import {Events} from '../Helpers/Events';
import EventsItems from '../components/EventsItems';
import Profile from '../Images/myprofile.jpg';
import {Link} from 'react-router-dom';


function About() {
  return (
    <div className='about'>
      <div className='image-row'>
        <div className='my-image'>
          <img src={Profile}></img>
        </div>
        </div>
        <div className='my-description'>
        <p className='about-para'>Hi My Name is Dushyanthi Mahavithana. 
        I like to think of myself as a digital explorer, 
        constantly navigating the fascinating world of computer science.
        By day, I'm a passionate programmer and  I'm always excited about new cool things happening in the tech world 
        and try to keep up with the latest advancements and innovations
        <br></br>
        <br></br>Full Name : Dushyanthi Nethmini Bhagya Mahavithana
        <br></br>Date of Birth : 2000 November 08 
        <br></br>School : Kandy Girls High School
        <br></br>University : University of Westminster - Bsc (hons) Computer Science</p>
        <button className='buttons' >
        <Link to='/contact' className="link-button">Hire Me</Link>
        </button>
        <a href="/DushyanthiCV.pdf" download className="link-button">  
        <button className='buttons'>Download My CV</button>
        </a>
      </div>
      <div className='sub-topics'>
        <h2>Experiences</h2>
        <div className='companies-list'>
        {Experiences.map((experiencesItems, key)=>{
          return(
            <ExperiencesItems
            key={key}
            company={experiencesItems.company}
            position={experiencesItems.position}
            year={experiencesItems.year}
            skills={experiencesItems.skills}>
               </ExperiencesItems>
          );
        })}</div>
       
      </div>
      <div className='sub-topics'>
        <h2>Events</h2>
        <div className='events-list'>
          {Events.map((eventsItems,key)=>{
            return(
              <EventsItems
                key={key}
                eimage={eventsItems.eimage}
                ename={eventsItems.ename}
                eyear={eventsItems.eyear}
                eabout={eventsItems.eabout}>
              </EventsItems>
            );
          })}
        </div>
      </div>
      
    </div>
  
  )
}

export default About
