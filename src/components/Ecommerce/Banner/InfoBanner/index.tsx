import React from "react";

export const InfoBanner = () => {
  return (
    <div className="section wf-section">
      <div className="section-row reverse-wrap">
        <div className="text-column">
          <h1 className="Heading">
            Email and SMS are great but what about your anonymous shoppers?
          </h1>
          <p className="Text--subdued u-h2">
            Web push notifications let you capture these shoppers as subscribers
            without asking for personal details, sending them notifications on
            their device screen, and nurturing them into buyers.
          </p>
        </div>
        <div className="image-column laptop-mockup">
          <div className="image-wrapper laptop-wrapper">
            <img
              src="https://assets.website-files.com/5acb2a61e4871db7dc6617c0/5c20676435af3a30d1d603df_laptop-new.gif"
              alt="aa"
              className="laptop-maockup-video"
            />
            <img
              src="https://assets.website-files.com/5acb2a61e4871db7dc6617c0/5c21c3289a1575eff28230fe_macbook_mockup_c.png"
              className="macbook-image"
            />
            <img
              src="https://assets.website-files.com/5acb2a61e4871db7dc6617c0/5c21c3289a1575eff28230fe_macbook_mockup_c.png"
              className="macbook-image-blur"
            />
          </div>
        </div>
      </div>
      <div className="section-bg second-section-bg">
        <img
          src="https://assets.website-files.com/5acb2a61e4871db7dc6617c0/5acb4e383bf54b719742150f_intro-section-2-background.svg"
          alt=""
        />
      </div>
    </div>
  );
};
