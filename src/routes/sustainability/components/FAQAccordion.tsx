import { useState } from "react";
import { FAQContainer, Question, Answer } from "../Sustainability.styled";

const faqs = [
  {
    question: "What can I use a Green Home Improvement Loan for?",
    answer:
      "You can use this loan to insulate your home, upgrade windows, or install efficient heating systems that reduce energy use and lower your bills.",
  },
  {
    question: "How do solar panel financing options work?",
    answer:
      "Solar panel financing helps you cover the upfront cost of installing solar panels at home, often with special rates to encourage renewable energy adoption.",
  },
  {
    question: "Are there special loans for electric vehicles?",
    answer:
      "Yes, many banks offer eco car loans with lower interest rates to help you buy electric or hybrid vehicles, promoting greener transportation options.",
  },
  {
    question: "What is an energy-efficient mortgage?",
    answer:
      "An energy-efficient mortgage allows you to buy or renovate a home with high energy ratings, often qualifying for better loan terms due to the reduced environmental impact.",
  },
  {
    question: "How can I invest sustainably?",
    answer:
      "Sustainable investment funds focus on companies committed to environmental responsibility and clean energy, helping you grow your savings while supporting green initiatives.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQContainer>
      <div>
        <Question
          isOpen={openIndex === 0}
          onClick={() => toggleIndex(0)}
          aria-expanded={openIndex === 0}
          aria-controls="faq-answer-0"
          id="faq-question-0"
        >
          {faqs[0].question}
        </Question>
        <Answer
          isOpen={openIndex === 0}
          id="faq-answer-0"
          role="region"
          aria-labelledby="faq-question-0"
        >
          {faqs[0].answer}
        </Answer>
      </div>
      <div>
        <Question
          isOpen={openIndex === 1}
          onClick={() => toggleIndex(1)}
          aria-expanded={openIndex === 1}
          aria-controls="faq-answer-1"
          id="faq-question-1"
        >
          {faqs[1].question}
        </Question>
        <Answer
          isOpen={openIndex === 1}
          id="faq-answer-1"
          role="region"
          aria-labelledby="faq-question-1"
        >
          {faqs[1].answer}
        </Answer>
      </div>
      <div>
        <Question
          isOpen={openIndex === 2}
          onClick={() => toggleIndex(2)}
          aria-expanded={openIndex === 2}
          aria-controls="faq-answer-2"
          id="faq-question-2"
        >
          {faqs[2].question}
        </Question>
        <Answer
          isOpen={openIndex === 2}
          id="faq-answer-2"
          role="region"
          aria-labelledby="faq-question-2"
        >
          {faqs[2].answer}
        </Answer>
      </div>
      <div>
        <Question
          isOpen={openIndex === 3}
          onClick={() => toggleIndex(3)}
          aria-expanded={openIndex === 3}
          aria-controls="faq-answer-3"
          id="faq-question-3"
        >
          {faqs[3].question}
        </Question>
        <Answer
          isOpen={openIndex === 3}
          id="faq-answer-3"
          role="region"
          aria-labelledby="faq-question-3"
        >
          {faqs[3].answer}
        </Answer>
      </div>
      <div>
        <Question
          isOpen={openIndex === 4}
          onClick={() => toggleIndex(4)}
          aria-expanded={openIndex === 4}
          aria-controls="faq-answer-4"
          id="faq-question-4"
        >
          {faqs[4].question}
        </Question>
        <Answer
          isOpen={openIndex === 4}
          id="faq-answer-4"
          role="region"
          aria-labelledby="faq-question-4"
        >
          {faqs[4].answer}
        </Answer>
      </div>
    </FAQContainer>
  );
}
