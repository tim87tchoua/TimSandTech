import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

type MapQuestion = { number: number; multiple?: boolean; correct: string[] };

type QuestionNavigatorProps = {
  questions: MapQuestion[];
  currentQuestion: number;
  answers: Record<number, string[]>;
  bookmarked: number[];
  answeredCount: number;
  totalQuestions: number;
  onNavigate: (question: number) => void;
};

export default function QuestionNavigator({
  questions,
  currentQuestion,
  answers,
  bookmarked,
  answeredCount,
  totalQuestions,
  onNavigate,
}: QuestionNavigatorProps) {
  return (
    <section className="navigator-panel" aria-label="Question navigator">
      <div className="panel-heading">
        <div>
          <span className="panel-overline">YOUR SESSION</span>
          <h2>Question map</h2>
        </div>
        <span className="map-count">
          {answeredCount}
          <i>/{totalQuestions}</i>
        </span>
      </div>
      <p className="panel-caption">Jump to a question</p>
      <div className="question-map">
        {questions.map(({ number, multiple, correct }) => {
          const selectedCount = answers[number]?.length ?? 0;
          const isAnswered =
            selectedCount > 0 &&
            (!multiple || selectedCount === correct.length);
          return (
            <button
            className={`map-cell ${currentQuestion === number ? "is-current" : ""} ${isAnswered ? "is-answered" : ""} ${bookmarked.includes(number) ? "is-bookmarked" : ""}`}
            key={number}
            onClick={() => onNavigate(number)}
            aria-label={`Go to question ${number}${isAnswered ? ", answered" : ""}${bookmarked.includes(number) ? ", bookmarked" : ""}`}
            aria-current={currentQuestion === number ? "step" : undefined}
          >
            {number}
          </button>
          );
        })}
      </div>
      <div className="map-legend">
        <span>
          <i className="legend-current" />
          Current
        </span>
        <span>
          <i className="legend-answered" />
          Answered
        </span>
        <span>
          <i className="legend-bookmarked" />
          Review
        </span>
      </div>
      <Link className="navigator-course-link" to="/courses">
        Browse the 16 course modules <FiArrowRight />
      </Link>
    </section>
  );
}
