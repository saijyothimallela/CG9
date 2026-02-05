import React from "react";
import { Database, Wrench, Cpu, LineChart, Globe } from "lucide-react";

function Procedure() {
  const steps = [
    {
      icon: <Database />,
      text: "Collected Amharic-English parallel data from sources such as news, religious, and general text datasets to build the translation corpus."
    },
    {
      icon: <Wrench />,
      text: "Cleaned and preprocessed the data by removing duplicates, unwanted symbols, and unmatched sentence pairs to ensure accuracy and consistency."
    },
    {
      icon: <Cpu />,
      text: "Applied SentencePiece subword tokenization to break down complex Amharic words, helping the model understand them better."
    },
    {
      icon: <LineChart />,
      text: "Built and trained a Transformer-based Neural Machine Translation model using attention mechanisms to focus on important words."
    },
    {
      icon: <Globe />,
      text: "Deployed the model using Flask (backend) and React (frontend), creating a real-time translation interface for Amharic-to-English text."
    }
  ];

  return (
    <div className="procedure-container">
      <h2>Project Procedure</h2>
      <ol>
        {steps.map((step, index) => (
          <li key={index}>
            <div className="step-icon">{step.icon}</div>
            <span>{step.text}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Procedure;
