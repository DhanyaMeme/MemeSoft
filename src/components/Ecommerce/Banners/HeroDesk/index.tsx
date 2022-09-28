import "./Style.scss";

export const HeroDeskBanner = () => {
  return (
    <div className="Ecom_Section">
      <div className="Ecom_Section--row Desk_Hero--row">
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
          className="Ecom_ImageColumn Desk_Hero"
          data-aos="zoom-in-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <div className="Image_Wrapper Desk_ImgWrapper">
            <img
              src="https://assets.website-files.com/5acb2a61e4871db7dc6617c0/5c20676435af3a30d1d603df_laptop-new.gif"
              alt="aa"
              className="Desk_Gif"
            />
            <img
              src="https://assets.website-files.com/5acb2a61e4871db7dc6617c0/5c21c3289a1575eff28230fe_macbook_mockup_c.png"
              className="Desk_Image"
              alt="aa"
            />
            <img
              src="https://assets.website-files.com/5acb2a61e4871db7dc6617c0/5c21c3289a1575eff28230fe_macbook_mockup_c.png"
              className="Desk_BlurImg"
              alt="aa"
            />
          </div>
        </div>
      </div>
      <div className="Ecom_Section--bg Desk_Hero--bg">
        <img
          src="https://assets.website-files.com/5acb2a61e4871db7dc6617c0/5acb4e383bf54b719742150f_intro-section-2-background.svg"
          alt=""
        />
      </div>
    </div>
  );
};
