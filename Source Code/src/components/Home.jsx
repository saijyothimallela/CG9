import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home-content">
        <h1 className="project-title">
          A Transformer-Based Framework for Domain-Sensitive Amharic-English Neural Machine Translation
        </h1>

        <div className="people-section">
          <div className="team">
            <h2>Team Members</h2>
            <ul>
              <li>Mallela Sai Jyothi</li>
              <li>Duddu Divya</li>
              <li>Dasari Srujana Sankeerthi</li>
            </ul>
          </div>

          <div className="guide">
            <h2>Guide</h2>
            <ul>
              <li>Syed Rizwana</li>
              <li>V. Lakshmi</li>
              <li>Yerraparu Sravani Devi</li>
              <li>Dodda Venkata Reddy</li>
            </ul>
          </div>
        </div>

        <button onClick={() => navigate("/validate")} className="test-btn">
          Test Model
        </button>
      </div>
    </div>
  );
}

export default Home;
