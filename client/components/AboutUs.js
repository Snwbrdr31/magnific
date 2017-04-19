import React from 'react'

//need to be able to display full page instead of part in the middle
// also need to bring down from navigation bar

const AboutUs = () => (
  <div className= 'body_width about_page'>
    <div className='col s12'>
      <h1 className='center about_title'><b className='magnific_title'>Magnific</b></h1><hr /><br />
        <h4>We are magnific</h4>
          <p className="about_magnific">
          The Magnific management team has been in the display business for over 20 years. In 2010, it became
          the teams focus to develop a better retractable display system. In 2013, we launched a display line
          featuring the revolutionary magnetic loading system. This system simplifies the process of installing a
          graphic into the stand. It eliminates the fear of removing the pin prematurely and requiring the stand to
          be taken apart to fix the tension. Every stand is a cartridge system that allows anyone to easily
          interchange graphics. Multiple banners can be produced for use in one banner stand. With the simple
          turn of a key, tension can be applied to the stand. By pressing a button, the tension can be retracted.
          The magnetic loading system is versatile and most importantly…simply simple.
          </p>
    </div>
  </div>
)

export default AboutUs;
