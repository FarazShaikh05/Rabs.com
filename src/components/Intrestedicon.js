import React, { useState } from 'react';

const Intrestedicon = () => {
  const [showForm, setShowForm] = useState(false);
  

  const handleButtonClick = () => {
    setShowForm(true);

  };

  return (
    <div>
      <button className='intrestedbtn ' onClick={handleButtonClick} type="button">I'm Interested</button>
      {showForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div>
              <img src="\images\logo.png" className='logoo-img img-fluid' alt="Logo" />
            </div>
            <button className="close-btn" onClick={() => setShowForm(false)}>×</button>
            <h4 style={{marginTop:'15px', color: "blue"}}>Let's Discuss Your Project !!!</h4>
            <hr />
            <h4 style={{marginBottom:'25px'}}>Please enter the details below</h4>
            <form>
              <input type="text" placeholder="Name" required />
              <input type="text" placeholder="Number" required />
              <input type="text" placeholder="Email" required />
              <div className="checkbox-container">
                <input type="checkbox" id="terms" required />
                <label htmlFor="terms">T & C Apply</label>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Intrestedicon;

