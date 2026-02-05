import React from 'react'
import { useNavigate } from 'react-router-dom'

const Testmodel = () => {
    const navigate=useNavigate();
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [loading, setLoading] = useState(false);
    const translateText = async () => {
    if (!input.trim()) return;

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input }),
      });

      const data = await res.json();
      setOutput(data.translatedText);
    } catch (err) {
      console.error(err);
      setOutput("Error translating");
    }
    setLoading(false);
  };

  return (
    
    <div className="button" onClick={() => navigate('/validate')}>
    <div className="container">
      <h2>Amharic → English Translator</h2>
      <textarea placeholder="Enter Amharic text"value={input}
        onChange={(e) => setInput(e.target.value)}/>

      <button onClick={translateText}>
        {loading ? "Translating..." : "Translate"}
      </button>

      <textarea placeholder="English output"value={output} readOnly/>
    </div>
    </div>
  
  );  
}

export default Testmodel