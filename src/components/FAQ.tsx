import { useState, type FC } from 'react';
import './FAQ.css';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Which operating systems are supported?",
    answer: "postprod3 is built exclusively for macOS, on Apple Silicon."
  },
  {
    question: "Do I need my own cloud storage account?",
    answer: "Yes. postprod3 mounts and caches against an S3 bucket you own — your media stays in your own storage, billed directly by your cloud provider, not marked up by us."
  },
  {
    question: "How is this different from LucidLink?",
    answer: "Same core idea — a shared, mountable filespace for video teams — but self-hosted on storage you control, with byte-range Pin (pin just the segment you need, not the whole file) instead of LucidLink's whole-file-only pinning."
  },
  {
    question: "Can multiple editors share the same mount?",
    answer: "Yes, that's the design goal — a shared, writable filespace multiple machines can mount at once, the same way a LucidLink filespace works today."
  },
  {
    question: "When can I actually use it?",
    answer: "postprod3 is still in active development — mounting, caching, and write support (folders, drag-and-drop) all work today in testing, but it isn't packaged for install yet. Waitlist members get first access."
  }
];

const FAQ: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="faq-header">
          <span className="faq-subtitle">Support</span>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{item.question}</h3>
                <span className="faq-toggle">{activeIndex === index ? '−' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
