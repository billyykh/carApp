import React from 'react'
import Data from './Data.jsx'
import "./home.css"

export default function Home() {
  return (
    <div>
        <section className='home section' id='home'>
          <div className='home_container contatiner grid'>
            <div className='home_content grid'>

              <div className='home_data'>
                <Data />
                
            </div>  
            </div>     
          </div>
        </section>
    </div>
  )
}
