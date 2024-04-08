import React, { useState } from "react";
import "./testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
const Testimonials = () => {
  const [select, setSelect] = useState(0);
  const length = testimonialsData.length;
  return (
    <div className="testimonials" id="testimonials">
      <div className="left_t">
        <span>Testimonials</span>
        <span className="stroke_text"> what they</span>
        <span style={{ color: "white" }}>say about us</span>
        <span>{testimonialsData[select].review}</span>
        <span>
          {testimonialsData[select].name}
          <span> - {testimonialsData[select].status}</span>
        </span>
      </div>
      <div className="right_t">
        <div></div>
        <div></div>
        <img src={testimonialsData[select].image} alt="testimonials data" />
        <div className="arrows">
          <img
            src={leftArrow}
            alt="left side arrow"
            onClick={() =>
              select === 0
                ? setSelect(length - 1)
                : setSelect((prev) => prev - 1)
            }
          />
          <img
            src={rightArrow}
            alt="right side arrow"
            onClick={() =>
              select === length - 1
                ? setSelect(0)
                : setSelect((prev) => prev + 1)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
