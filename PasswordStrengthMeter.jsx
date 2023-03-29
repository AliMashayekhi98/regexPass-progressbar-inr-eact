import React from "react";
import zxcvbn from "zxcvbn";

const PasswordStrengthMeter = ({ password }) => {
  const testResult = zxcvbn(password);
  const num = (testResult.score * 100) / 4;

  const createPassLabel = () => {
    switch (testResult.score) {
      case 0:
        return "very weak";
      case 1:
        return "Weak";
      case 2:
        return "Fear";
      case 3:
        return "Good";
      case 4:
        return "Strong";
      default:
        return "";
    }
  };

  const funProgressColor = () => {
    switch (testResult.score) {
      case 0:
        return "#828282";
      case 1:
        return "#EA1111";
      case 2:
        return "#F98400";
      case 3:
        return "#D8CF00";
      case 4:
        return "#00FF2A";
      default:
        return "none";
    }
  };

  const changePasswordColor = () => ({
    width: ` ${num}%`,
    background: funProgressColor(),
    height: "10px",
  });

  return (
    <>
      <div className="progress" style={{ height: "10px" }}>
        <div className="progress-bar" style={changePasswordColor()}></div>
      </div>
      <p style={{ color: funProgressColor() }}>{createPassLabel()}</p>
    </>
  );
};

export default PasswordStrengthMeter;
