import React from 'react'

const Home = () => {
  return (
   <>
   <main>
    <section className="section-hero">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <p>Reliable IT Support, Solutions, and Success</p>
          <h1>Welcome to ProByte IT</h1>
          <p>At ProByte IT, we specialize in transforming complex IT challenges into seamless solutions. Our services ensure optimal performance, advanced security, and reliable support to help your business thrive</p>
          <div className="btn btn-group">
            <a href='/contact'>
              <button className='btn'>Connect Now</button>
            </a>
            <a href='/service'>
              <button className='btn secondary-btn'>Learn More</button>
            </a>
          </div>
        </div>
        <div className="hero-images">
          <img src='/images/home.png' alt='' width="500" height="500"/>
        </div>
      </div>
    </section>
   </main>
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
   <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src="/images/design.png"
              alt="coding together"
              width="500"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              let's discuss how ProByte IT can help your business thrive in
              the digital age.
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
   </>
  )
}

export default Home