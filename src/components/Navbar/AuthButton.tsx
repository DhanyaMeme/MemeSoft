import React from "react";
import { useNavigate } from "react-router";
import { TextButton } from "../../ui-kits/TextButton/TextButton.component";

export const AuthButton = () => {
  const navigate = useNavigate();

  return (
    <TextButton isSmall onClick={() => navigate("/login")}>
      JOIN
    </TextButton>
  );
};
