import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <footer className='footer'>
        <div className='footer_container container'>
            <h1 className='footer_title'>V8 Auto</h1>
            
            <div className='footer_social'>
                <a href='#home' className='footer_social-icon' ><i class="uil uil-instagram"></i></a>

                <a href='#home' className='footer_social-icon' ><i class="uil uil-facebook-f"></i></a>

                <a href='#home' className='footer_social-icon' ><i class="uil uil-linkedin-alt"></i></a>
            </div>

            <span className='footer_copy'>&#169; V8 Auto Limited. All right reserved</span>
        </div>
    </footer>
  )
}
