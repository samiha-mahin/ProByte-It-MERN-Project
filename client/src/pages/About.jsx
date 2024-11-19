import React from 'react'
import { useAuth } from '../store/Auth'

const About = () => {

  const {user} = useAuth()

  return (
  <>
   <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src="/images/about.png"
              alt="coding together"
              width="500"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>Welcome {user ? ` ${user.username}, to our ProByte It` : `,to our ProByte It`}</p>
            <h1>Why Choose us?</h1>
            <p>
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure vero aspernatur impedit magnam odit recusandae dolor officia eius veniam, ut sint laboriosam eum? Cumque velit fuga aperiam inventore eligendi!
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="analytics">
    <div className="container grid grid-four-cols">
      <div className="div1">
        <h2>50+</h2>
        <p>Registered Companies</p>
      </div>
      <div className="div1">
        <h2>10,000+</h2>
        <p>Happy Clients</p>
      </div>
      <div className="div1">
        <h2>500+</h2>
        <p>Well Known Developers</p>
      </div>
      <div className="div1">
        <h2>24/7</h2>
        <p>Services</p>
      </div>
    </div>
   </section>
   <section>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59038.35288551073!2d91.74500724863283!3d22.357515599999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8906edac245%3A0x5be1258bce3f55b!2sYunusco%20City%20Centre!5e0!3m2!1sen!2sbd!4v1731519739662!5m2!1sen!2sbd"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
    </section>
  </>
  )
}

export default About