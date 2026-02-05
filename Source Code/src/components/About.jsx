import React from "react";

function About() {
  return (
    <div className="about-wrapper">
      <div className="about-content">
        <h2>About the Project</h2>
        <p>
          This research proposes a domain-sensitive Neural Machine Translation (NMT)
          system for translating Amharic to English using a Transformer architecture.
          The model employs SentencePiece subword tokenization to effectively handle
          the morphological complexity and data sparsity of the Amharic language,
          enabling better representation of rare and compound words. A domain-adaptive
          fine-tuning approach is applied to enhance contextual translation quality
          across specialized text domains. Comprehensive preprocessing steps,
          including text normalization, transliteration, and parallel corpus cleaning,
          were performed to ensure high-quality training data. The system was trained
          on an Amharic-English parallel corpus and evaluated using BLEU score and
          translation adequacy metrics. Experimental results demonstrate that the
          proposed Transformer-based framework significantly improves fluency,
          adequacy, and semantic accuracy compared to baseline models, contributing
          to the advancement of low-resource language translation through the
          integration of deep learning and attention mechanisms.
        </p>
      </div>
    </div>
  );
}

export default About;
