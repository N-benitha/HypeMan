import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
// import LoadIcons from "./loadIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faBackward, faForward, faPenToSquare, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Write from "./components/write";
import LogIn from "./components/logIn";
import SignUp from "./components/signUp";

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
      <textarea className="response-box" placeholder="Respond here"><Write/></textarea>
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

const Welcome = () => {
  const handleTagClick = (tag) => {
    // Assuming GenerateComponent is a function that handles the prompt
    GenerateComponent(tag);
  };

  return (
    <div className="welcome-container">
      <h1>Welcome to HypeMan</h1>
      <p>Fuel Your Mind. Elevate Your Spirit. Own Your Moment.</p>

      <div className="text-input">
        <input className="search-bar" placeholder="How Are You Feeling Today?" />
        <button className="submit-button"><FontAwesomeIcon icon={faPaperPlane}/></button>
      </div>
      
      <div className="tags">
        {["Imposter Syndrome", "Anxiety", "Validation", "Motivation"].map((tag) => (
          <span key={tag} className="tag" onClick={() => handleTagClick(tag)}>{tag} ❌</span>
        ))}
      </div>
      <Link to="/login" className="cta-button">Sign Up/Login</Link>
    </div>
  );
};



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
