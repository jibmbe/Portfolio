import React from "react";
import { FaCode, FaPaintBrush, FaBullhorn } from "react-icons/fa";

function Skills() {
  const skills = [
    { name: "Web Development", icon: <FaCode style={iconStyle} />, color: "#007BFF" },
    { name: "Graphic Design", icon: <FaPaintBrush style={iconStyle} />, color: "#28A745" },
    { name: "Digital Marketing", icon: <FaBullhorn style={iconStyle} />, color: "#FFC107" },
  ];

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>My Skills</h1>
      <div style={skillsContainerStyle}>
        {skills.map((skill, index) => (
          <div key={index} style={{ ...skillCardStyle, borderColor: skill.color }}>
            <div style={{ ...iconContainerStyle, backgroundColor: skill.color }}>
              {skill.icon}
            </div>
            <p style={skillTextStyle}>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Styles
const containerStyle = {
  textAlign: "center",
  padding: "50px 20px",
  maxWidth: "900px",
  margin: "0 auto",
  fontFamily: "'Merriweather', serif",
};

const headerStyle = {
  fontSize: "2.5rem",
  color: "#002855",
  fontWeight: "bold",
  marginBottom: "30px",
  textTransform: "uppercase",
};

const skillsContainerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
  justifyContent: "center",
  padding: "10px",
};

const skillCardStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.15)",
  textAlign: "center",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  border: "2px solid",
  cursor: "pointer",
};

const iconContainerStyle = {
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto 15px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  transition: "transform 0.3s ease-in-out",
};

const iconStyle = {
  fontSize: "2rem",
  color: "#fff",
};

const skillTextStyle = {
  fontSize: "1.2rem",
  fontWeight: "bold",
  color: "#002855",
};

// Hover Effect
const hoverEffect = (event) => {
  event.target.closest("div").style.transform = "scale(1.05)";
  event.target.closest("div").style.boxShadow = "0px 8px 15px rgba(0, 0, 0, 0.2)";
};

const removeHoverEffect = (event) => {
  event.target.closest("div").style.transform = "scale(1)";
  event.target.closest("div").style.boxShadow = "0px 6px 12px rgba(0, 0, 0, 0.15)";
};

// Attach hover effect to skill cards
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll("div[style*='padding: 20px']");
  cards.forEach((card) => {
    card.addEventListener("mouseover", hoverEffect);
    card.addEventListener("mouseout", removeHoverEffect);
  });
});

export default Skills;
