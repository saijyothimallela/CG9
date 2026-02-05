import React, { useState } from "react";

const ValidateTranslation = () => {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {

    // Frontend validation
    if (!inputText.trim()) {
      setError("Input text is required.");
      return;
    }
    if (inputText.trim().length < 3) {
      setError("Input text must be at least 3 characters long.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: inputText }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Server error. Try again.");
      }

      setTranslatedText(data.translated);
    } catch (err) {
      setError(err.message);
      setTranslatedText("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="validate-container">
      <h2>Validate Translation</h2>

      <textarea
        rows="5"
        placeholder="Enter text to translate"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}

      <button onClick={handleTranslate} disabled={loading}>
        {loading ? "Translating..." : "Translate"}
      </button>

      <textarea
        rows="5"
        placeholder="Translation result"
        value={translatedText}
        readOnly
      />
    </div>
  );
};

export default ValidateTranslation;
