import React from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { TextButton } from "../../ui-kits/TextButton/TextButton.component";

export const AuthButton = () => {
  const navigate = useNavigate();

  const { user } = useAuth();

  return (
    <TextButton
      isSmall
      onClick={() => navigate(`${user ? "/profile" : "/login"}`)}
    >
      {user ? "PROFILE" : "JOIN"}
    </TextButton>
  );
};
