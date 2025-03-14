import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

function Home() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px 20px",
        maxWidth: "1100px",
        margin: "0 auto",
        fontFamily: "'Arial', sans-serif",
      }}
    >
      {/* Profile Section */}
      <h1
        style={{
          fontSize: "2.8rem",
          color: "#001f3f",
          marginBottom: "10px",
          fontWeight: "bold",
        }}
      >
        Welcome to My Portfolio
      </h1>
      <img
        src="/images/profile.jpeg"
        alt="Profile"
        style={{
          width: "200px",
          borderRadius: "50%",
          border: "5px solid #001f3f",
          marginTop: "10px",
          transition: "transform 0.3s ease-in-out",
        }}
        onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
      />
      <p
        style={{
          fontSize: "18px",
          maxWidth: "750px",
          margin: "15px auto",
          lineHeight: "1.6",
          color: "#444",
        }}
      >
        Hello, I am a student at <strong>ADMC</strong> with a passion for{" "}
        <strong>technology, design, and problem-solving.</strong> I love creating
        impactful digital solutions. Explore my portfolio to see my work!
      </p>

      {/* Skills Section */}
      <h2 style={{ color: "#001f3f", marginTop: "30px" }}>Skills & Expertise</h2>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          padding: "0",
          gap: "12px",
        }}
      >
        {[
          "React.js",
          "JavaScript",
          "HTML & CSS",
          "Python",
          "UI/UX Design",
          "Problem Solving",
          "Team Collaboration",
        ].map((skill, index) => (
          <li
            key={index}
            style={skillStyle}
            onMouseOver={(e) => (e.target.style.background = "#ff9900")}
            onMouseOut={(e) => (e.target.style.background = "#001f3f")}
          >
            {skill}
          </li>
        ))}
      </ul>

      {/* Projects Section */}
      <h2 style={{ color: "#001f3f", marginTop: "40px" }}>Projects</h2>
      <div style={projectGridStyle}>
        {[
          { title: "Portfolio Website", desc: "A modern portfolio showcasing my work." },
          { title: "E-commerce App", desc: "An online store built using React & Django." },
          { title: "Stock Management System", desc: "Real-time tracking system for a flour mill." },
        ].map((project, index) => (
          <div
            key={index}
            style={projectCardStyle}
            onMouseOver={(e) => (e.target.style.background = "#ff9900")}
            onMouseOut={(e) => (e.target.style.background = "#f4f4f4")}
          >
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>

      {/* Resume & Contact Section */}
      <h2 style={{ color: "#001f3f", marginTop: "40px" }}>Get in Touch</h2>
      <p>Let's connect! You can reach out via email or check out my work.</p>
      <div style={buttonContainerStyle}>
        <a href="mailto:your.email@example.com" style={buttonStyle}>
          Contact Me
        </a>
        <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" style={buttonStyle}>
          GitHub Profile
        </a>
        <a href="/resume.pdf" download style={buttonStyle}>
          Download Resume
        </a>
      </div>

      {/* Social Media Icons */}
      <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "15px" }}>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" style={iconStyle}>
          <FaLinkedin size={40} color="#0077b5" />
        </a>
        <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" style={iconStyle}>
          <FaTwitter size={40} color="#1DA1F2" />
        </a>
      </div>
    </div>
  );
}

// Styles
const skillStyle = {
  background: "#001f3f",
  color: "#ffffff",
  padding: "12px 20px",
  borderRadius: "25px",
  fontWeight: "bold",
  fontSize: "16px",
  transition: "0.3s",
  cursor: "pointer",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.15)",
};

const projectGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "20px",
  padding: "10px",
};

const projectCardStyle = {
  background: "#f4f4f4",
  padding: "20px",
  borderRadius: "10px",
  transition: "0.3s",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
  cursor: "pointer",
};

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "15px",
  flexWrap: "wrap",
  marginTop: "10px",
};

const buttonStyle = {
  display: "inline-block",
  padding: "12px 25px",
  background: "#001f3f",
  color: "#ffffff",
  borderRadius: "5px",
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: "bold",
  transition: "0.3s",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
};

const iconStyle = {
  transition: "0.3s",
  cursor: "pointer",
};

export default Home;
