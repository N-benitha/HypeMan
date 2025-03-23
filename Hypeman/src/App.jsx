import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
// import LoadIcons from "./loadIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faBackward, faForward, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => (
  <div className="dashboard-container">
    <aside className="sidebar">
      <h2>HypeMan</h2>
      <button><FontAwesomeIcon icon={faPenToSquare}/>New Chat</button>
      <button>Today's Feels</button>
    </aside>
    <main className="main-content">
      <header className="header">
        <h1>How Are You Feeling Today?</h1>
        <div>
          <button>Logout</button>
          <button>About Me</button>
        </div>
      </header>
      <textarea className="response-box" placeholder="Respond here"></textarea>
      <div className="controls">
        <div>
          <button><FontAwesomeIcon icon={faBackward}/></button>
          <button><FontAwesomeIcon icon={faPlay}/></button>
          <button><FontAwesomeIcon icon={faForward}/></button>
        </div>
        <select>
          <option>5 min</option>
          <option>10 min</option>
        </select>
      </div>
    </main>
  </div>
);

const Welcome = () => (
  <div className="welcome-container">
    <h1>Welcome to HypeMan</h1>
    <p>Fuel Your Mind. Elevate Your Spirit. Own Your Moment.</p>
    <input className="search-bar" placeholder="How Are You Feeling Today?" />
    <div className="tags">
      {["Imposter Syndrome", "Anxiety", "Validation", "Motivation"].map((tag) => (
        <span key={tag} className="tag">{tag} ❌</span>
      ))}
    </div>
    <Link to="/login" className="cta-button">Sign Up/Login</Link>
  </div>
);

const Auth = () => (
  <div className="auth-container">
    <div className="auth-box">
      <h2>Login</h2>
      <input className="input-field" placeholder="Email" required/>
      <input className="input-field" placeholder="Password" type="password" required/>
      <button className="submit-button">Login</button>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  </div>
);

const Signup = () => (
  <div className="auth-container">
    <div className="auth-box">
      <h2>Sign Up</h2>
      <input className="input-field" placeholder="First Name" required/>
      <input className="input-field" placeholder="Last Name" required/>
      <input className="input-field" placeholder="Email" required/>
      <input className="input-field" placeholder="Password" type="password" required/>
      <button className="submit-button">Sign Up</button>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
