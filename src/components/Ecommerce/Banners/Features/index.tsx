import React from "react";
import "./Style.scss";

export const Features = () => {
  return (
    <div className="Ecom_Section">
      <h1 className="Heading">Why Do You Need MemeSoft?</h1>
      <div className="Grid">
        {Array.from(Array(6).keys()).map((item: number) => (
          <div
            className="Grid__Cell 1/2--tablet-and-up 1/3--lap-and-up"
            data-aos="zoom-out-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <div className="Ecom_FeatureItem">
              <div className="Ecom_FeatureItem--Icon">
                <img
                  src="https://assets.website-files.com/5acb2a61e4871db7dc6617c0/5c206a6e35af3adb2bd6046c_icon_abandon_reminders.svg"
                  alt="Send abandoned cart reminders"
                />
              </div>
              <h3 className="Heading">Recover abandoned carts</h3>
              <p>
                Remind shoppers about items left in their cart to effectively
                reduce cart abandonment and drive more purchases.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
