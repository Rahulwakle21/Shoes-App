import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaStar, FaUserCircle } from "react-icons/fa";
import StarRating from "./StarRating";

const Fedback = (props) => {

  // const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setFeedbackdata({ ...feedbackdata, rating: newRating });
  }
  const [submittedFeedback, setSubmittedFeedback] = useState(null);
  const [feedbackdata, setFeedbackdata] = useState({
    name: "",
    feedback: "",
    rating: 0,
  });
  const handleChnage = (e) => {
    setFeedbackdata({ ...feedbackdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedFeedback(feedbackdata);
  };
  return (
    <div>
      <Modal 
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            FeedBack Form
          </Modal.Title>
        </Modal.Header>
        <form action="" onSubmit={handleSubmit} >
          <Modal.Body>
            <div className="userName mt-4">
              <input
                type="text"
                placeholder="Enter Name"
                name="name"
                onChange={handleChnage}
                style={{
                  width: "40%",
                  padding: "5px",
                  borderRadius: "8px",
                }}
              />
            </div>
            <div className="Description mt-3">
              <textarea
                rows="3"
                cols="39"
                placeholder="FeedBack"
                name="feedback"
                onChange={handleChnage}
                style={{ borderRadius: "8px" }}
              ></textarea>
            </div>
            <div className="StartRAting">
           <p> Add Rating: <StarRating totalStars={5}  onStarClick={handleRatingChange} rating={feedbackdata.rating} /></p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="subBtn mt-2">
              <button type="submit" className="btn btn-success" onClick={props.onHide}>
                Submit
              </button>
            </div>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </form>
      </Modal>

      {
    submittedFeedback &&(
        <div className='mt-4 text-white'>
            <p><FaUserCircle className='userIcon'/> <span className='ms-3 text-white'>{submittedFeedback.name}</span></p>
            <p> <StarRating totalStars={5} rating={submittedFeedback.rating} /></p>
            <p style={{color:"gray"}}>Reviewed in India on 17 November 2023 <br />
                        Size: 6UK   Colour: White/Navy <span className='text-danger'>Verified Purchase</span></p>
            <p className='text-white'>{submittedFeedback.feedback}</p>
        </div>
    )
}
    </div>
  );
};

export default Fedback;
