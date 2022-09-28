import "./Style.scss";

export const HeroMobileBanner = () => {
  return (
    <div className="Ecom_Section">
      <div className="Ecom_Section--row Mobile_Hero--row">
        <div
          className="Ecom_TextColumn"
          data-aos="zoom-in-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <h1 className="Heading">
            Email and SMS are great but what about your anonymous shoppers?
          </h1>
          <p className="Text--subdued u-h4">
            Web push notifications let you capture these shoppers as subscribers
            without asking for personal details, sending them notifications on
            their device screen, and nurturing them into buyers.
          </p>
        </div>
        <div
          className="Ecom_ImageColumn Mobile_Hero"
          data-aos="zoom-in-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <div className="Image_Wrapper">
            <img
              src="https://assets.website-files.com/5acb2a61e4871db7dc6617c0/5acb4f25501121696ccd9c90_video-gif.gif"
              alt="aa"
              className="Mobile_Gif"
            />
            <img
              src="https://assets.website-files.com/5acb2a61e4871db7dc6617c0/5acb468b3bf54b6767420ea9_phone_mockup.png"
              className="Mobile_Image"
              alt="aa"
            />
            <img
              src="https://assets.website-files.com/5acb2a61e4871db7dc6617c0/5acb468b3bf54b6767420ea9_phone_mockup.png"
              className="Mobile_BlurImg"
              alt="aa"
            />
          </div>
        </div>
      </div>
      <div className="Ecom_Section--bg Mobile_Hero--bg">
        <img
          src="https://assets.website-files.com/5acb2a61e4871db7dc6617c0/5acb3d9ef15a7710436519c0_intro-section-1-background.svg"
          alt="bg"
        />
      </div>
    </div>
  );
};
