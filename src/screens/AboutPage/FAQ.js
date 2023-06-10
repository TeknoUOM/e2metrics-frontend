import React, { useState } from 'react';
import FAQtoggle from './FAQ-toggle';
import "./FAQ.css";

function FAQ () {
  const [faqs, setfaqs] = useState([
    {
      question: 'What kind of metrics can I track using your GitHub dashboard?',
      answer: 'Our dashboard provides a wide range of metrics related to your GitHub activity, including code commits, pull requests, issues, and more. ',
      open: false
    },
    {
      question: 'Is it possible to compare my metrics with those of other users or organizations?',
      answer: ' Yes, our dashboard allows you to compare your metrics with those of other users or organizations, providing valuable insights into your performance. ',
      open: false
    },
    {
      question: 'How secure is your platform?',
      answer: ' We take security very seriously and employ industry-standard measures to ensure the safety and privacy of our users data.',
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