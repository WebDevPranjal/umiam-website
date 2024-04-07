import React from 'react'
import Navbar from '../_components/navbar/page';
import style from './landing.module.css';
import Image from 'next/image';

const Landing = () => {
  return (
    <div className={style.page}>
        <section className={style.hero}>
            <Navbar />
            <div className={style.hero_content}>
                <h1>A place where talent meet opportunity</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec auctor, odio eget tincidunt posuere, sapien justo
                </p>
                <div className={style.btn}>
                    <button>Explore Website</button>
                </div>
            </div>    
        </section>

        <section className={style.about}>
            <h3>About Us</h3>
            <div className={style.hr_line}></div>
            <h3>Umiam</h3>
            <div className={style.about_content}>
                <div className={style.image_container}>
                    <Image src='/images/about.jpg' alt='about-image' width='300' height='300' />
                </div>
                <div className={style.text_container}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec auctor, odio eget tincidunt posuere, sapien justo
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec auctor, odio eget tincidunt posuere, sapien justo
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec auctor, odio eget tincidunt posuere, sapien justo
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec auctor, odio eget tincidunt posuere, sapien justo
                    </p>

                    <div className={style.btn}>
                        <button>Read More</button>
                    </div>
                </div>    
            </div>   
        </section>   

        <section className={style.message}>
            <h3>Message</h3>
            <div className={style.hr_line}></div>
            <h3>Wadens</h3>
            <div className={style.message_content}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec auctor, odio eget tincidunt posuere, sapien justo
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec auctor, odio eget tincidunt posuere, sapien justo
                </p>
            </div>  
        </section>

        <section className={style.testimorials}>
            <h3>Testimorials</h3>
            {/* testimorial card  */}
        </section>
        
        <section className={style.hostal_commitee}>
            <h3>Hostal Committee</h3>
            {/* hostal committee card */}
        </section>
    </div>
  )
}

export default Landing;