import React from "react";

function Work() {
  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>My Work & Achievements</h1>

      {/* Certificates Section */}
      <div>
        <h2 style={subHeaderStyle}>Certificates</h2>
        <div style={certContainerStyle}>
          {[
            { name: "Marketing Fundamentals", img: "/images/marketing.jpeg" },
            { name: "Social Media Strategy", img: "/images/socialmedia.jpeg" },
            { name: "Biology of Conservation", img: "/images/conservation.jpeg" },
            { name: "Membership Certificate", img: "/images/membership.jpeg" },
          ].map((cert, index) => (
            <div key={index} style={certCardStyle}>
              <img
                src={cert.img}
                alt={cert.name}
                style={certImageStyle}
              />
              <p style={certTitleStyle}>{cert.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Styles
const containerStyle = {
  textAlign: "center",
  padding: "50px 20px",
  maxWidth: "1000px",
  margin: "0 auto",
  fontFamily: "'Laila', sans-serif",
};

const headerStyle = {
  fontSize: "2.8rem",
  color: "#003366",
  fontWeight: "bold",
  marginBottom: "25px",
};

const subHeaderStyle = {
  fontSize: "2.2rem",
  color: "#00509d",
  marginBottom: "15px",
};

const certContainerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "20px",
  justifyContent: "center",
  padding: "15px",
};

const certCardStyle = {
  background: "#fff",
  padding: "15px",
  borderRadius: "12px",
  boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)",
  textAlign: "center",
  cursor: "pointer",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  border: "1px solid #ccc",
};

const certImageStyle = {
  width: "100%",
  maxWidth: "250px",
  borderRadius: "10px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
  transition: "transform 0.3s ease-in-out",
};

const certTitleStyle = {
  fontSize: "18px",
  fontWeight: "bold",
  color: "#003366",
  marginTop: "12px",
};

// Hover Effect
const hoverEffect = (event) => {
  event.target.style.transform = "scale(1.08)";
};

const removeHoverEffect = (event) => {
  event.target.style.transform = "scale(1)";
};

// Attach hover effect to images
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.addEventListener("mouseover", hoverEffect);
    img.addEventListener("mouseout", removeHoverEffect);
  });
});

export default Work;
