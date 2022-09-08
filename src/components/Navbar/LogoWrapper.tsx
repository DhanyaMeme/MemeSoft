import { NavLink } from "react-router-dom";

const LogoWrapper = () => {
  return (
    <div className="Header__FlexItem">
      <div className="Header__Logo">
        <NavLink to="/" className="Header__LogoLink">
          <img
            className="Header__LogoImage"
            src={"images/logo.svg"}
            // width="100"
            // style={{ height: "60px" }}
            alt="MemeSoft"
          />
        </NavLink>
      </div>
    </div>
  );
};

export default LogoWrapper;
