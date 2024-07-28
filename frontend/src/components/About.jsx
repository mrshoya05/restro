import React from 'react'
import { Link } from 'react-scroll';
import {HiOutlineArrowNarrowRight} from "react-icons/hi";

const About = () => {
  return (
    <>
        <section className='about' id='about'>
      <div className="container">
        <div className="banner">
            <div className="top">
                <h1 className='heading'>ABOUT US</h1>
                <p>
                    The only thing we are serious about is quality food !</p>
            </div>
            <p className='mid'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem pariatur facere rerum similique, quas voluptatem! Ut odit corrupti sint assumenda odio quas nesciunt distinctio qui neque repellat! Debitis eum illum incidunt tempora iusto rem quidem eius, id omnis voluptatibus? Id, cupiditate. Voluptatibus enim optio harum assumenda quia veritatis ducimus autem?</p>
            <Link to={'/'}>Explore Menu { " "} <span>
                <HiOutlineArrowNarrowRight />
                    </span>
                    </Link>
        </div>
        <div className="banner">
            <img src="/about.png" alt="about png" />
        </div>
      </div>
    </section>
    </>
  );
};



export default About
