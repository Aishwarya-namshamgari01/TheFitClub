import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

const Plans = () => {
  return (
    <div className="Plans" id="plans">
      <div className="blur blur_plans_1"></div>
      <div className="blur blur_plans_2"></div>
      <div className="programs_header">
        <span className="stroke_text">Ready to start</span>
        <span>your journey</span>
        <span className="stroke_text">now withus</span>
      </div>
      {/* Plans card */}
      <div className="plans_cards">
        {plansData.map((plan, i) => (
          <div className="plans_card" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>
            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature" key={i}>
                  <img src={whiteTick} alt="tick" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <span>See more benefits</span>
            <div>
              <button className="btn">Join now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
