##Title
Transformer-Based Amharic–English Neural Machine Translation
## Team Info
- 22471A05XX — **Syed Rizwana** 
  _Work Done: Dataset collection, preprocessing, SentencePiece tokenization, model training_

- 22471A05XX — **Mallela Sai Jyothi**  
  _Work Done: Transformer architecture design, hyperparameter tuning, experimentation_

- 22471A05XX — **Duddu Divya**
  _Work Done: Model evaluation, BLEU score analysis, comparative study_

- 22471A05XX — **Dasari Srujana Sankeerthi**  
  _Work Done: Literature survey, documentation, result visualization_

---

## Abstract
This project presents a Transformer-based neural machine translation (NMT) system for Amharic-to-English translation, targeting low-resource and morphologically rich languages. Character-aware subword tokenization using SentencePiece is employed to handle complex morphology and reduce out-of-vocabulary issues. The model is trained on a cleaned subset of the Tanzil religious corpus and achieves a BLEU score of 59.03, significantly outperforming traditional RNN-based baselines.

---

## Paper Reference (Inspiration)
👉 **[A Transformer-Based Framework for Domain-Sensitive Amharic–English Neural Machine Translation with Character-Aware Subword Encoding  
– Syed Rizwana et al.](https://ieeexplore.ieee.org/document/10813169)**  
Original IEEE conference paper used as inspiration for the model.

---

## Our Improvement Over Existing Paper
- Domain-specific training on religious text (Tanzil corpus)
- Character-aware subword tokenization using SentencePiece
- Optimized Transformer architecture for low-resource settings
- Significant BLEU score improvement over RNN + Attention baseline
- Fully reproducible end-to-end NMT pipeline

---

## About the Project
- **What it does:** Translates Amharic religious text into English using a Transformer-based NMT model  
- **Why it is useful:** Improves translation quality for a low-resource, morphologically rich language  
- **Workflow:** Input text → Preprocessing → SentencePiece tokenization → Transformer model → English translation  

---

## Dataset Used
👉 **[OPUS Tanzil Amharic–English Corpus](https://opus.nlpl.eu/Tanzil.php)**

**Dataset Details:**
- Total sentence pairs: 25,197  
- Cleaned and used: 23,790  
- Training set: 80%  
- Validation set: 10%  
- Test set: 10%  
- Domain: Religious (Quranic text)

---

## Dependencies Used
Python 3.10, TensorFlow 2.18, SentencePiece, NumPy, Matplotlib, sacreBLEU

---

## EDA & Preprocessing
- Removal of duplicate and misaligned sentence pairs  
- Text normalization and character filtering  
- Length-based sentence filtering  
- Language-specific cleaning for Amharic and English  
- Dataset shuffling to avoid bias  

---

## Model Training Info
- Transformer encoder–decoder architecture  
- 2 encoder layers and 2 decoder layers  
- 8 attention heads  
- Embedding dimension: 128  
- Feed-forward network size: 512  
- Optimizer: Adam (learning rate = 1e-4)  
- Batch size: 64  
- Training epochs: 15  
- Hardware: Google Colab (Tesla T4 GPU)  

---

## Model Testing / Evaluation
- Evaluation metric: BLEU-4 score  
- Smoothing applied for low-resource evaluation  
- Comparative analysis with RNN + Attention baseline  
- Manual qualitative evaluation of translated outputs  

---

## Results
- BLEU score achieved: **59.03**  
- RNN + Attention baseline BLEU: 26.08  
- Significant improvement in fluency and semantic accuracy  
- Strong performance on domain-specific religious translations  

---

## Limitations & Future Work
- Greedy decoding limits translation optimality  
- Beam search decoding can improve results  
- Future integration of multilingual pretraining  
- Extension to other domains such as healthcare and news  

---

## Deployment Info
- Trained and tested on Google Colab  
- Model can be deployed using Flask or FastAPI  
- Suitable for web-based or API-based translation systems  
