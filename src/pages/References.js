import React from "react";

function References() {
  const references = [
    { name: "John Doe", phone: "123-456-7890", email: "john@example.com", title: "Marketing Manager" },
    { name: "Jane Smith", phone: "987-654-3210", email: "jane@example.com", title: "Creative Director" },
  ];

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Professional References</h1>
      <div style={refContainerStyle}>
        {references.map((ref, index) => (
          <div key={index} style={refCardStyle}>
            <h2 style={nameStyle}>{ref.name}</h2>
            <p style={titleStyle}>{ref.title}</p>
            <p style={contactStyle}>
              📞 <span style={contactTextStyle}>{ref.phone}</span>
            </p>
            <p style={contactStyle}>
              📧 <span style={contactTextStyle}>{ref.email}</span>
            </p>
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
  maxWidth: "800px",
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

const refContainerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "20px",
  justifyContent: "center",
  padding: "15px",
};

const refCardStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.15)",
  textAlign: "center",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  border: "1px solid #ccc",
};

const nameStyle = {
  fontSize: "1.8rem",
  fontWeight: "bold",
  color: "#002855",
  marginBottom: "5px",
};

const titleStyle = {
  fontSize: "1.2rem",
  color: "#555",
  fontStyle: "italic",
  marginBottom: "15px",
};

const contactStyle = {
  fontSize: "1.1rem",
  color: "#003366",
  marginBottom: "8px",
};

const contactTextStyle = {
  fontWeight: "bold",
  color: "#004080",
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

// Attach hover effect to reference cards
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll("div[style*='padding: 20px']");
  cards.forEach((card) => {
    card.addEventListener("mouseover", hoverEffect);
    card.addEventListener("mouseout", removeHoverEffect);
  });
});

export default References;
