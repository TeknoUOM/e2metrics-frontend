import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./FeedbackCarousel.css";

const feedbackList = [
  {
    id: 1,
    name: "Nimeesha Fernando",
    title: "Great platform!",
    description:
      "I've been using this platform for a few months now and it's been a game changer for my team's productivity. Highly recommend!",
  },
  {
    id: 2,
    name: "Dasith Rathnasinghe",
    title: "Easy to use",
    description:
      "The dashboard is intuitive and easy to use, even for someone like me who isn't particularly tech-savvy. Love it!",
  },
  {
    id: 3,
    name: "Pasindu Siriwardhana",
    title: "Awesome support",
    description:
      "Had a few questions about the platform and the support team was super helpful and responsive. Can't ask for more than that!",
  },
  {
    id: 4,
    name: "Piyumini Chathurangi",
    title: "Great experience",
    description:
      "I had a great experience using this platform. It helped me streamline my workflow and stay on top of my projects.",
  },
  {
    id: 5,
    name: "Hemantha Wanniarachchi",
    title: "Highly recommend",
    description:
      "I would highly recommend this platform to anyone looking to improve their GitHub analytics. It's been a game changer for me!",
  },
  {
    id: 6,
    name: "Shanka Nagahawatta",
    title: "Fantastic tool",
    description:
      "This tool has been fantastic for my team. It's helped us stay on top of our projects and improve our productivity.",
  },
];

const FeedbackCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((activeIndex - 1 + feedbackList.length) % feedbackList.length);
  };

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % feedbackList.length);
  };

  return (
    <div className="feedback-carousel">
      <div className="feedback-card-container">
        {feedbackList.slice(activeIndex, activeIndex + 3).map((feedback) => (
          <div className="feedback-card" key={feedback.id}>
            <h2 className="feedback-card-title">{feedback.title}</h2>
            <p className="feedback-card-description">{feedback.description}</p>
            <p className="feedback-card-name">- {feedback.name}</p>
          </div>
        ))}
      </div>
      <div className="feedback-carousel-buttons">
        <button className="button" onClick={handlePrevClick}>
          <FaArrowLeft />
        </button>
        <button className="button" onClick={handleNextClick}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default FeedbackCarousel;
