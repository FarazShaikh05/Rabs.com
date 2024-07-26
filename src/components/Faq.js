import React, { useState, useEffect } from 'react';

const Faq = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  const [faqData, setFaqData] = useState([]);

  // Function to toggle 
  const toggleAnswerVisibility = (questionIndex) => {
    setOpenQuestion(openQuestion === questionIndex ? null : questionIndex);
  };

  //API Fetching with useEffect Hook
  useEffect(() => {
    fetch('/faqData.json')
      .then(response => response.json())
      .then(data => setFaqData(data))
      .catch(error => console.error('Error fetching FAQ data:', error));
  }, []);

  return (
    <div className="container-fluid section faq-section" id="FAQ">
      <div className="row">
        <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>FAQ's:</h1>
        {faqData.map((item, index) => (
          <div key={index} className="col-lg-6 col-12 faq-div">
            <div
              onClick={() => toggleAnswerVisibility(index)}
              className="question"
              style={{ cursor: 'pointer', fontWeight: 'bold' }}
            >
              {item.question}
            </div>
            <div
              className="answer"
              style={{
                marginTop: '10px',
                maxHeight: openQuestion === index ? '1000px' : '0',
                opacity: openQuestion === index ? 1 : 0,
                overflow: 'hidden',
                transition: 'max-height 0.3s ease, opacity 0.3s ease',
                padding: openQuestion === index ? '10px' : '0'
              }}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;

