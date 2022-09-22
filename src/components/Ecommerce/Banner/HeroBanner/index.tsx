import React from "react";

export const HeroBanner = () => {
  return (
    <div className="section wf-section">
      <div className="section-row hero-section-row">
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
        <div className="image-column hero-mobile">
          <div className="image-wrapper">
            <img
              src="https://assets.website-files.com/5acb2a61e4871db7dc6617c0/5acb4f25501121696ccd9c90_video-gif.gif"
              alt="aa"
              className="phone-video-block"
            />
            <img
              src="https://assets.website-files.com/5acb2a61e4871db7dc6617c0/5acb468b3bf54b6767420ea9_phone_mockup.png"
              className="image"
            />
            <img
              src="https://assets.website-files.com/5acb2a61e4871db7dc6617c0/5acb468b3bf54b6767420ea9_phone_mockup.png"
              className="image-blur"
            />
          </div>
        </div>
      </div>

      <div className="section-bg hero-bg">
        <img
          src="https://assets.website-files.com/5acb2a61e4871db7dc6617c0/5acb3d9ef15a7710436519c0_intro-section-1-background.svg"
          alt="bg"
        />
      </div>
    </div>
  );
};