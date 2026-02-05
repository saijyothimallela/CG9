import React from "react";
import { CheckCircle } from "lucide-react";

function Objective() {
  const objectives = [
    "To develop a domain-sensitive Neural Machine Translation (NMT) framework leveraging the Transformer architecture for accurate Amharic–English translation, addressing the limitations of traditional sequence-to-sequence and recurrent neural network models.",
    "To enhance translation performance for the morphologically rich Amharic language through the integration of SentencePiece subword tokenization, enabling efficient handling of complex word forms, rare tokens, and inflectional variations.",
    "To implement an optimized data preprocessing and corpus preparation pipeline, including text normalization, transliteration, tokenization, and parallel corpus cleaning, to ensure high-quality, domain-consistent training data.",
    "To apply domain adaptation and fine-tuning strategies for improving the contextual understanding and semantic accuracy of translations across specific linguistic and application domains.",
    "To evaluate the proposed NMT framework using established metrics, such as BLEU score and translation adequacy, and to compare its performance with existing baseline models to demonstrate measurable improvements in fluency, coherence, and translation accuracy.",
    "To advance research in low-resource language translation, contributing a scalable, transformer-based methodology that supports linguistic diversity and promotes equitable language technology development for underrepresented languages like Amharic."
  ];

  return (
    <div className="objective-wrapper">
      <div className="objective-content">
        <h2>Project Objectives</h2>
        <ul>
          {objectives.map((obj, index) => (
            <li key={index}>
              <CheckCircle className="icon" />
              <span>{obj}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Objective;
