import { useState } from "react";
import { assessmentQuestions } from "../data/questions";
import ProgressBar from "./ProgressBar";

const sectionOrder = ["strategy", "operations", "workspace", "customers"];

export default function Assessment({ section, submit }) {
  const normalizedSection = section.toLowerCase();
  const questions = assessmentQuestions[normalizedSection] || [];

  const [responses, setResponses] = useState({});

  const currentStep =
    sectionOrder.indexOf(normalizedSection) + 1 || 1;

  const totalSteps = sectionOrder.length;

  const handleChange = (question, value) => {
    setResponses(prev => {
      let updatedAnswer;

      if (question.type === "checkbox") {
        const prevAns = prev[question.id]?.answer || []; 
        updatedAnswer = prevAns.includes(value)
          ? prevAns.filter(v => v !== value)
          : [...prevAns, value];
      } 
      else {
        updatedAnswer = value;
      }

      const maxScore =
        question.type === "checkbox"
          ? question.options.length
          : question.type === "maturity"
          ? 3
          : 1;

      return {
        ...prev,
        [question.id]: {
          type: question.type,
          answer: updatedAnswer,
          maxScore
        }
      };
    });
  };

  const isAllAnswered =
    questions.length > 0 &&
    questions.every(q => responses[q.id]);

  return (
    <div className="container">
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

      <h2 className="page-title">
        {normalizedSection} Assessment
      </h2>

      {questions.map((q, index) => (
        <div key={q.id} className="question-block">
          <div className="question-text">
            {index + 1}. {q.question}
          </div>

          {q.type === "checkbox" &&
            q.options.map(opt => (
              <label key={opt} className="option">
                <input
                  type="checkbox"
                  checked={(responses[q.id]?.answer || []).includes(opt)}
                  onChange={() => handleChange(q, opt)}
                />
                <span>{opt}</span>
              </label>
            ))}


          {q.type === "radio" &&
            q.options.map(opt => (
              <label key={opt} className="option">
                <input
                  type="radio"
                  name={q.id}
                  checked={responses[q.id]?.answer === opt}
                  onChange={() => handleChange(q, opt)}
                />
                <span>{opt}</span>
              </label>
            ))}


          {q.type === "maturity" &&
            ["No plans", "Being planned", "Being implemented", "Already in use"].map(opt => (
                <label key={opt} className="option">
                  <input
                    type="radio"
                    name={q.id}
                    checked={responses[q.id]?.answer === opt}
                    onChange={() => handleChange(q, opt)}
                  />

                  <span>{opt}</span>
                </label>
              ))}


          {q.type === "dropdown" && (
            <select
              value={responses[q.id]?.answer || ""}
              onChange={e => handleChange(q, e.target.value)}
            >
              <option value="">Select</option>
              {q.options.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          )}

          <div className="divider" />
        </div>
      ))}

      <button
        className="next-btn"
        disabled={!isAllAnswered}
        onClick={() => submit(responses)}
      >
        Next
      </button>
    </div>
  );
}
