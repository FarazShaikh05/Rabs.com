import React from 'react';


const Footer = () => {
  return (
    <div>
      <div className='container-fluid '>
        <div className='row footer'>
          <div className='col-lg-4 col-12'>
            <h2>Services</h2>
            <div className='footer-text-p'>

            <p><a href="#Service" >UI - UX Design</a></p>
            <p><a href="#Service" >Wordpress</a></p>
            <p><a href="#Service" >Portfolio website</a></p>
            <p><a href="#Service" >Corporate websites</a></p>
            <p><a href="#Service" >Php & React website</a></p>
            <p><a href="#Service" >Real estate and developers website</a></p>
            
            </div>
          </div>
          <div className='col-lg-4 col-12'>
            <h2>Office Address</h2>
            <p>Address: Office B16, Al Kazim Building, AL Garhoud, DUBAI.</p>
            <p>Call: +971 58 233 5969</p>
            <br />
            <p>Address: Office 01, Pushtikar Society, Jogeshwari West, Mumbai -102.</p>
            <p>Call: +91 98336 36916</p>
            <br />
            <p>Email: support@rabsnetsolutions.com</p>
          </div>
          <div className='col-lg-4 col-12'>
            <h2>Newsletter</h2>
            <div className='newsletter-input'>
              <input type='email' placeholder='Email' />
            </div>
            <input type='checkbox' id='terms' />
              <label htmlFor='terms' className='terms-label'>
                T & C Apply 
              </label><br></br><br></br>
            <button type="submit">Submit</button>
            <div className='insta-linkd-icon'>
                <a className="icons"  href="https://www.instagram.com/rabsnetsolutionspvtltd/"><i class="fa-brands fa-instagram fa-2xl"></i></a>
                <a className="icons"  href="https://www.linkedin.com/in/rehan-halai-5b317974/?originalSubdomain=in" ><i class="fa-brands fa-linkedin fa-2xl"></i></a>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <hr></hr>
              <p style={{textAlign:'center',fontSize:'20px'}}>Developed By Faraz Shaikh . All Rights Reserved Privacy Policy | Terms & Conditions</p>
            </div>
            <div className='row'>
                <div className='col-12' >
                  <div className='icon-1'>
                    <a href="https://api.whatsapp.com/send/?phone=%2B919833636916&text=I%27m+interested+Lets+Connect.&type=phone_number&app_absent=0">
                      <img className='img-fluid' src="/images/whatsapp.png" alt="WhatsApp" />
                    </a>
                  </div>
                  <br></br>
                  <div  className='icon-2'>
                      <img className='img-fluid ' src=" \images\call.png" alt="call"></img>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

