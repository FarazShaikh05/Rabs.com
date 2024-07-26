import React from 'react'

const Aboutus = () => {
    return(
        <div>
            <div className='container-fluid section' id="AboutUs">
                <div className='row'>
                    <h1 style={{textAlign:'center',marginBottom:'30px'}}>About Founders</h1>
                    <div className='col-lg-2 col-12'></div>
                    <div className='col-lg-4 col-12 founder' >
                        <div className='founder-img'>
                            <img  className='img-fluid rehan-img' src="\images\rehan-halai.jpg" alt="founder-1"></img>
                        </div>
                        <div className='founder-text'>
                            <h5>MR. REHAN HALAI </h5>
                            <h5 style={{marginBottom:'30px'}}>DIRECTOR & FOUNDER </h5>
                            <p style={{fontSize:'18px'}}>Director and Founder of RABS Net Solutions, it’s my pleasure to introduce to you our dynamic organization with the solutions we offer. We always look forward to add real value to your business through our analytical and inventive ways with every single project. We're committed to TAKING YOU FORWARD, with passion, innovation, creating value for our Clients.</p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-12  founder'  >
                    <div className='founder-img'>
                            <img className='img-fluid bilal-img' src="\images\bilal-halai.jpg" alt="founder-2"></img>
                        </div>
                        <div className='founder-text'>
                            <h5>MR. BILAL HALAI </h5>
                            <h5 style={{marginBottom:'30px'}}>STRATEGY & RESEARCH ANALYST</h5>
                            <p style={{fontSize:'18px'}}>Bilal Halai is the brain behind the proprietary technology solution designed by the company for real estate channel partners. He leads the development and business development team and gives them critical insights which give this unique digital platform the cutting edge and helps stakeholders in the real estate business taking their revenue to higher levels.</p>
                        </div>
                    </div>
                    <div className='col-lg-2 col-12'></div>
                </div>
                <div className='arrow-img-founder' style={{marginTop:'80px'}} >
                        <img src="\images\arrow.png" alt="arrowimg" ></img>
                    </div>
            </div>
        </div>
    )
}

export default Aboutus;