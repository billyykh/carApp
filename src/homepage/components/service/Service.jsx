import React from 'react'
import './service.css'

export default function Service() {

    const [Toggle,setToggle] = React.useState(0);

    const toggleTab = (index) => {
        setToggle(index);
    }


    return (
    <section className='skills section' id='service'>
            <h2 className='section_title'>Services</h2>
            <span className='section_subtitle'>What can we do for you and your vechicle</span>

            <div className='services_container container grid'>

                {/* First container */}
                <div className='services_content'>
                    <div>
                        <i className='uil uil-car services_icon'></i>
                        <h3 className='services_title'>Car <br/> Trade</h3>
                    </div>
                    {/* <span className='services_button' onClick={()=>toggleTab(1)}>View More <i class="uil uil-arrow-right services_button-icon"></i></span> */}

                    
                    <div className={Toggle === 1 ? "services_modal active-modal" : "services_modal"}>
                        <div className='services_modal-content'>
                            <i class="uil uil-times services_modal-close" onClick={()=>toggleTab(0)}></i>
                            <h3 className='services_modal-title'>Technical Skills</h3>
                            <p className='services_modal-description'>Technical Knowlegde that can apply into works.</p>

                            <ul className='services_modal-services grid'>

                            {/* {techSkills.map(item => 
                                <li className='services_modal-service'>
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p className='services_modal-info'>{item}</p>
                                </li>
                            )} */}

                            </ul>
                        </div>
                    </div>

                </div>

                {/* Second container */}
                <div className='services_content'>
                    <div>
                        <i className='uil uil-wrench services_icon'></i>
                        <h3 className='services_title'>Repair<br/>Service</h3>
                    </div>
                    {/* <span className='services_button' onClick={()=>toggleTab(2)}>View More <i class="uil uil-arrow-right services_button-icon"></i></span> */}
                    
                    <div className={Toggle === 2 ? "services_modal active-modal" : "services_modal"}>
                        <div className='services_modal-content'>
                            <i class="uil uil-times services_modal-close" onClick={()=>toggleTab(0)}></i>
                            <h3 className='services_modal-title'>Soft Skills</h3>
                            <p className='services_modal-description'>Skills that increase the efficiency of work.</p>

                            <ul className='services_modal-services grid'>

                            {/* {softSkills.map(item => 
                                <li className='services_modal-service'>
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p className='services_modal-info'>{item}</p>
                                </li>
                            )} */}

                            </ul>
                        </div>
                    </div>

                </div>
                
                {/* Third container */}
                <div className='services_content'>
                    <div>
                        <i class="uil uil-car-wash services_icon"></i>
                        <h3 className='services_title'>Detail clean<br/>and servicing</h3>
                    </div>
                    {/* <span className='services_button' onClick={()=>toggleTab(3)}>View More <i class="uil uil-arrow-right services_button-icon"></i></span> */}
                    
                    <div className={Toggle === 3 ? "services_modal active-modal" : "services_modal"}>
                        <div className='services_modal-content'>
                            <i class="uil uil-times services_modal-close"  onClick={()=>toggleTab(0)}></i>
                            <h3 className='services_modal-title'>Languages</h3>
                            <p className='services_modal-description'>Languages I can speak, listen and write fluently.</p>

                            <ul className='services_modal-services grid'>

                            {/* {languages.map(item => 
                                <li className='services_modal-service'>
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p className='services_modal-info'>{item}</p>
                                </li>
                            )} */}


                            </ul>
                        </div>
                    </div>

                </div>


            </div>
        </section>
  )
}
