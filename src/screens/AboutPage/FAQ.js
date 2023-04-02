import React, { useState } from 'react';
import FAQtoggle from './FAQ-toggle';
import "./FAQ.css";

function FAQ () {
  const [faqs, setfaqs] = useState([
    {
      question: 'What can you gain by our GitHub dashboard',
      answer: 'There are several reasons. ',
      open: true
    },
    {
      question: 'What is the purpose?',
      answer: ' The users can manage and analyze their Git repositories for effective and efficient project management. ',
      open: false
    },
    {
      question: 'What the payment tiers?',
      answer: ' Free, Basic, and premium',
      open: false
    }
  ]);

  

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }


  return (
    <div >
      
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQtoggle faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default FAQ;