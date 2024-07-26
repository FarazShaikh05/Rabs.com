import React from 'react'

const Reviews = () => {
    return(
        <div>
            <div className='cantainer-fluid section' id="Review" >
                <div className='row' >
                    <div className='col-12' >
                        <div className='review-heading-text'>
                            <hr></hr>
                            <h1>Praise for Precision and Performance</h1>
                            <p>Here are some noteworthy recognitions and testimonials<br></br>
                            that underscore our commitment to excellence</p>
                        </div>
                        <div className='rev-img'>
                            <img className='img-fluid img-rev' src="\images\1.JPG" alt="review" ></img>
                        </div>
                        <div className='rev-img'>
                            <img className='img-fluid img-rev' src="\images\2.JPG" alt="review" ></img>
                        </div>
                        <div className='rev-img'> 
                            <img className='img-fluid img-rev' src="\images\3.JPG" alt="review" ></img>
                        </div>
                        <div className='rev-img'>
                            <img className='img-fluid img-rev' src="\images\4.JPG" alt="review" ></img>
                        </div>
                        <div className='rev-img'>
                            <img className='img-fluid img-rev' src="\images\5.JPG" alt="review" ></img>
                        </div>
                        <div className='rev-img'>
                            <img className='img-fluid img-rev' src="\images\6.JPG" alt="review" ></img>
                        </div>
                        <div className='rev-img'>
                            <img className='img-fluid img-rev' src="\images\7.JPG" alt="review" ></img>
                        </div>
                        <div className='rev-img'>
                            <img className='img-fluid img-rev' src="\images\8.JPG" alt="review" ></img>
                        </div>
                        <div className='arrow-img' style={{marginTop:'80px'}} >
                        <img src="\images\arrow.png" alt="arrow-img" ></img>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews;