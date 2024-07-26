import React from 'react';

const Home = () => {
  return (
    <div className='home container-fluid section' id="Home">
      <div className='row'>
        <div className="Home-section col-12">
          <div className='home-heading-div'>
            <h2 className='home-heading'>Let's Discuss Your Project</h2>
          </div>
          <div className='home-heading-div'>
            <h1 className='home-heading-1'>
              Elevate Your Digital Presence<br />
              Impactful Innovation, Seamless<br />
              Experiences
            </h1>
          </div>
          <div className='container-fluid'>
            <div className='row'>
              <div className='home-heading-div2 col-sm-6 col-md-3'>
                <h1 className='home-heading-2'>Wordpress</h1>
              </div>
              <div className='home-heading-div2 col-sm-6 col-md-3'>
                <h1 className='home-heading-2'>UI-UX</h1>
              </div>
              <div className='home-heading-div2 col-sm-6 col-md-3'>
                <h1 className='home-heading-2'>Real-Estate CRM</h1>
              </div>
              <div className='home-heading-div2 col-sm-6 col-md-3'>
                <h1 className='home-heading-2'>PHP - React Website</h1>
              </div>
            </div>
          </div>
          <div className='arrow-img'>
            <img src="\images\arrow.png" alt="Arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
