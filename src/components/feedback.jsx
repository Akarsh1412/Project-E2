import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import NAVbar2 from './user-nav.jsx';
import Footer from './footer.jsx';
import { FaStar } from 'react-icons/fa'; // Assuming you use Font Awesome for icons
import Swal from 'sweetalert2'; // Import SweetAlert2

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [feedbackText, setFeedbackText] = useState('');

  const handleRatingClick = (newRating) => {
    setRating(newRating);
  };

  const handleFeedbackChange = (event) => {
    setFeedbackText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulate submitting data to backend (replace with your actual logic)
    console.log(`Rating: ${rating}, Feedback: ${feedbackText}`);

    // Show success message using SweetAlert2
    Swal.fire({
      title: 'Feedback Saved!',
      text: 'Your response has been saved successfully.',
      icon: 'success',
    });

    setRating(0); // Reset rating and feedback after submit
    setFeedbackText('');
  };

  return (
    <div>
      <div className="feedback">
        <form onSubmit={handleSubmit}>
          <h2 className="feedbacktext1">Leave a Feedback</h2>
          <h4 className="feedbacktext2">Rate!</h4>
          <div className="star-rating">
            {[...Array(5)].map((star, index) => {
              const filled = index < rating;
              return (
                <label key={index}>
                  <input
                    type="radio"
                    value={index + 1} // Rating starts from 1
                    checked={filled}
                    onChange={() => handleRatingClick(index + 1)}
                  />
                  <FaStar className={filled ? 'filled' : 'empty'} />
                </label>
              );
            })}
          </div>
          <textarea
            value={feedbackText}
            onChange={handleFeedbackChange}
            placeholder="Write your feedback here..."
            rows={5}
          />
          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
