import { useState } from "react";
import { FiCheck, FiInfo } from "react-icons/fi";

type AnswerOptionProps = {
  letter: string;
  answer: string;
  questionNumber: number;
  selected: boolean;
  multiple?: boolean;
  definition: string;
  example: string;
  onSelect: (letter: string) => void;
};

export default function AnswerOption({
  letter,
  answer,
  questionNumber,
  selected,
  multiple = false,
  definition,
  example,
  onSelect,
}: AnswerOptionProps) {
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const helpId = `answer-guide-${questionNumber}-${letter}`;

  return (
    <div
      className={`answer-option-wrap ${selected ? "is-selected" : ""} ${isHelpOpen ? "is-help-open" : ""}`}
    >
      <label
        className="answer-option"
        title={`Definition: ${definition} Example: ${example}`}
      >
        <input
          type={multiple ? "checkbox" : "radio"}
          name={`question-${questionNumber}`}
          value={letter}
          checked={selected}
          aria-describedby={helpId}
          onChange={() => onSelect(letter)}
        />
        <span className="answer-letter">{letter}</span>
        <span className="answer-copy">{answer}</span>
        <span className="answer-check">
          <FiCheck />
        </span>
      </label>
      <button
        className="answer-help-toggle"
        type="button"
        aria-label={`Definition and example for ${answer}`}
        aria-expanded={isHelpOpen}
        aria-controls={helpId}
        onClick={() => setIsHelpOpen((open) => !open)}
      >
        <FiInfo />
      </button>
      <div className="answer-help" id={helpId} role="tooltip">
        <div>
          <span>DEFINITION</span>
          <p>{definition}</p>
        </div>
        <div>
          <span>EXAMPLE</span>
          <p>{example}</p>
        </div>
      </div>
    </div>
  );
}
