
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
            {/* <iframe src='http://localhost:3001/creatives/render_ads?web_key=35a3mx4sp' frameBorder="0"></iframe> */}
          </div>
          {/* <div className='test-ads2'>
            <ins
              className='skuberg-ads'
            />
          </div> */}
          {/* <div className='test-ads3'>
            <ins
              className='skuberg-ads'
            />
          </div> */}
          {/* <div className='test-ads4'>
            <ins
              className='skuberg-ads'
            />
          </div> */}
        </div>
      </div>
      {/* <script
        async
        src="http://localhost:3001/creatives/render_ads?web_key=35a3mx4sp"
      ></script> */}
    </div>
  )
}

export default Home