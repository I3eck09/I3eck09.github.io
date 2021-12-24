import React from 'react'

function About() {
  return (
    <>
      <div className='test-ads1'>
        <ins
          className='skuberg-ads'
        // src="http://localhost:3001/creatives/render_ads?web_key=35a3mx4sp"
        >
        </ins>
        <iframe
          referrerpolicy="no-referrer-when-downgrade"
          src='http://localhost:3001/creatives/render_ads?web_key=35a3mx4sp' width="160" height="600" frameBorder="0" scrolling='no'></iframe>
      </div>
    </>
  )
}

export default About
