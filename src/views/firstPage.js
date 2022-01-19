
import React from 'react'
import './index.css'

function Home() {
  return (
    <div className='container'>
      <h2 className='home'>Home</h2>
      <div className='test1'>
        <div className='test-div'>
          <div className='test-ads1'>
            <ins
              className='skuberg-ads'
            />
            {/* <iframe title="banner" src="http://localhost:3001/creatives/render_ads?key=zjutbhu63" width="160" height="600" scrolling="no" frameBorder={0} /> */}
            <iframe title="banner" src="http://localhost:3001/creatives/render_ads?key=gskmhxsqh" width="300" height="600" scrolling="no" frameBorder={0} />
          </div>
          <div className='test-ads2'>
            <ins
              className='skuberg-ads'
            />
            {/* <iframe title="banner" src="http://localhost:3001/creatives/render_ads?key=wpwt2xzke" width="728" height="90" scrolling="no" frameBorder={0} /> */}
          </div>
          <div className='test-ads3'>
            <ins
              className='skuberg-ads'
            />
            {/* <iframe title="banner" src="http://localhost:3001/creatives/render_ads?key=wqwyi68e9" width="160" height="600" scrolling="no" frameBorder={0} /> */}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home