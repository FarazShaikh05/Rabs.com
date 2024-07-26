import React from 'react';


const Overview = () => {
    return (
        <div>
            <div className='container-fluid section' id="Overview">
                <div className='row'>
                    <div className="col-12">
                        <div className='moving-heading'>
                            <h1 className="moving-heading-font">
                                Absolutely! World's Best-Leading Website Designers at Your Service
                            </h1>
                        </div>
                        <h3 style={{ textAlign: "center", marginBottom: "50px", fontSize: "40px", fontWeight: "bold" }}>
                            Our Existence
                        </h3>
                    </div>
                </div>
            </div>

            <div className='container-fluid'>
                <div className='row'>
                    <div className='rating-container col-lg-4 col-12'>
                        <div className="rating">
                            <h1>4.9/5</h1>
                            <div className="star-rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                        </div>

                        <div className="rating">
                            <div>
                                <h1>10000+</h1>
                                <p>Total Projects Delivered</p>
                            </div>
                        </div>

                        <div className="rating">
                            <div>
                                <h1>12+</h1>
                                <p>Years of Experience</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className='col-lg-8 col-12'>
                        <img className='img-fluid' src="\images\map.png.gif" alt="map" style={{ width: "100%" }} />
                    </div>
                </div>
            </div>
            <div className=' service-div-3 container-fluid' >
                <div className='row' >
                    <div className='col-12'>
                        <h3 style={{textAlign:"center"}} >A Website Design-First Integrated Business Promotion Company</h3>
                        <p style={{textAlign:'center',padding:"20px 50px"}}>RABS Net Solutions Pvt. Ltd. is a full-service website design agency based in Mumbai, India. An agency with a strong growth trajectory and mindset, we are a team of passionate strategists, marketers, communicators, and technologists. We collaborate with our clients in India and abroad on strategies and tactics to achieve measurable business results. <strong>"Let's make website design magic together."</strong></p>
                        <div className='arrow-img' style={{marginTop:'30px'}} >
                   <img src="\images\arrow.png"  alt="arrow-img"></img>
                    </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Overview;


