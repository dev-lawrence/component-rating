import { useState } from 'react';
import Star from './assets/images/icon-star.svg';
import ThankYou from './assets/images/illustration-thank-you.svg';
import { motion } from 'framer-motion';

const App = () => {
  const [selectedRating, setSelectedRating] = useState(null);
  const [isSelected, setSelected] = useState(false);

  const handleSelectedRating = (rating) => {
    setSelectedRating(rating);
  };

  const submitForm = (e) => {
    e.preventDefault();
    setSelected(true);
  };

  return (
    <>
      {isSelected ? (
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 1 }}
          className="thank-you"
        >
          <img src={ThankYou} alt="" />
          <span className="rating">You selected {selectedRating} out of 5</span>
          <h2>Thank You</h2>
          <p>
            Thank you! We appreciate you taking the time to give a rating. ever
            need support, don't hesitate to get in touch!
          </p>
        </motion.div>
      ) : (
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          onSubmit={submitForm}
          className="rating-container"
        >
          <div className="star">
            <img src={Star} alt="" />
          </div>
          <h1>How did we do todays?</h1>

          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>

          <div className="rating-number">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                key={rating}
                onClick={() => handleSelectedRating(rating)}
                className="rating-btn"
                type="button"
              >
                {rating}
              </button>
            ))}
          </div>

          <button className="btn">Submit</button>
        </motion.form>
      )}
    </>
  );
};

export default App;
