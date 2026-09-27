import { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiBookmark,
  FiBookOpen,
  FiCheck,
  FiInfo,
  FiX,
} from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AnswerOption from "../components/exam/AnswerOption";
import ExamHeader from "../components/exam/ExamHeader";
import QuestionNavigator from "../components/exam/QuestionNavigator";
import { answerGuides } from "../data/answerGuides";
import { examCategories, examQuestions } from "../data/examQuestions";
import { getCourseSectionId } from "../lib/courseSectionId";
import {
  goToQuestion,
  selectAnswer,
  setCategory,
  tick,
  togglePause,
  toggleTheme,
  type AppDispatch,
  type RootState,
} from "../store/examStore";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const {
    currentQuestion,
    answers,
    remainingSeconds,
    paused,
    category,
    darkMode,
  } = useSelector((state: RootState) => state.exam);
  const [showRationale, setShowRationale] = useState(false);
  const [modal, setModal] = useState<"finish" | "feedback" | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [bookmarked, setBookmarked] = useState<number[]>([]);

  useEffect(() => {
    if (paused || remainingSeconds === 0) return;
    const interval = window.setInterval(() => dispatch(tick()), 1000);
    return () => window.clearInterval(interval);
  }, [dispatch, paused, remainingSeconds]);

  const question = examQuestions[currentQuestion - 1];
  const totalQuestions = examQuestions.length;
  const visibleQuestions = examQuestions.filter(
    (item) => category === "All domains" || item.category === category,
  );
  const selectedAnswers = answers[currentQuestion] ?? [];
  const answeredCount = Object.entries(answers).filter(
    ([number, selected]) => {
      const item = examQuestions[Number(number) - 1];
      return (
        selected.length > 0 &&
        (!item.multiple || selected.length === item.correct.length)
      );
    },
  ).length;
  const correctCount = examQuestions.filter((item) => {
    const selected = answers[item.number] ?? [];
    return (
      selected.length === item.correct.length &&
      item.correct.every((letter) => selected.includes(letter))
    );
  }).length;
  const isBookmarked = bookmarked.includes(currentQuestion);
  const courseReferences = question.courseReference ?? "DO-NOT-RELY";

  function moveQuestion(number: number) {
    dispatch(goToQuestion(number));
    setShowRationale(false);
  }

  function toggleBookmark() {
    setBookmarked((existing) =>
      isBookmarked
        ? existing.filter((number) => number !== currentQuestion)
        : [...existing, currentQuestion],
    );
  }

  function changeCategory(nextCategory: string) {
    dispatch(setCategory(nextCategory));
    const firstMatch = examQuestions.find(
      (item) =>
        nextCategory === "All domains" || item.category === nextCategory,
    );
    if (firstMatch) moveQuestion(firstMatch.number);
  }

  return (
    <div className={`exam-app min-h-screen ${darkMode ? "theme-dark" : ""}`}>
      <ExamHeader
        currentQuestion={currentQuestion}
        remainingSeconds={remainingSeconds}
        paused={paused}
        darkMode={darkMode}
        onPause={() => dispatch(togglePause())}
        onThemeToggle={() => dispatch(toggleTheme())}
        onFinish={() => setModal("finish")}
        onFeedback={() => {
          setModal("feedback");
          setFeedbackSent(false);
        }}
      />

      <main className="workspace" id="top">
        <div className="workspace-heading">
          <div>
            <div className="eyebrow">
              CYBERSECURITY &amp; THREAT INTELLIGENCE
            </div>
            <h1>Knowledge check</h1>
          </div>
          <div className="session-status">
            <span className="status-dot" />
            Session in progress
          </div>
          <Link className="course-library-link" to="/courses">
            Course modules <FiArrowRight />
          </Link>
        </div>

        <div className="exam-layout">
          <section className="question-column" aria-label="Exam question">
            <div className="question-topline">
              <div className="question-number">
                Question <strong>{currentQuestion}</strong>
                <span>of {totalQuestions}</span>
              </div>
              <div className="question-tools">
                <span className="category-tag">{question.tag}</span>
                <Button
                  variant="plain"
                  className={`bookmark-button ${isBookmarked ? "is-bookmarked" : ""}`}
                  onClick={toggleBookmark}
                  aria-label={
                    isBookmarked ? "Remove bookmark" : "Bookmark question"
                  }
                  title={isBookmarked ? "Remove bookmark" : "Bookmark question"}
                >
                  <FiBookmark />
                  {isBookmarked ? "Saved" : "Review later"}
                </Button>
              </div>
            </div>

            <div className="scenario-block">
              <div className="scenario-kicker">
                <span className="scenario-icon">01</span>
                <span>SCENARIO</span>
              </div>
              <p>{question.prompt}</p>
            </div>

            <div className="question-course-reference">
              <span className="question-course-reference-label">
                COURSE CONNECTION
              </span>
              {courseReferences === "DO-NOT-RELY" ? (
                <span className="question-course-reference-unavailable">
                  DO-NOT-RELY
                </span>
              ) : (
                courseReferences.map((reference) => (
                  <Link
                    className="question-course-reference-link"
                    key={`${reference.moduleId}-${reference.heading}`}
                    to={`/courses/${reference.moduleId}#${getCourseSectionId(reference.moduleId, reference.heading)}`}
                  >
                    <FiBookOpen />
                    Module {reference.moduleId}: {reference.heading}
                  </Link>
                ))
              )}
            </div>

            <fieldset className="answer-fieldset">
              <legend>
                {question.multiple ? "Select two answers" : "Select the best answer"}
              </legend>
              <div className="answer-list">
                {question.answers.map(([letter, answer]) => {
                  const guide = answerGuides[answer];
                  return (
                    <AnswerOption
                      key={letter}
                      letter={letter}
                      answer={answer}
                      questionNumber={currentQuestion}
                      selected={selectedAnswers.includes(letter)}
                      multiple={question.multiple}
                      definition={guide.definition}
                      example={guide.example}
                      onSelect={(selectedLetter) =>
                        dispatch(
                          selectAnswer({
                            question: currentQuestion,
                            answer: selectedLetter,
                            multiple: question.multiple,
                            maxAnswers: question.correct.length,
                          }),
                        )
                      }
                    />
                  );
                })}
              </div>
            </fieldset>

            <button
              className={`rationale-toggle ${showRationale ? "is-open" : ""}`}
              onClick={() => setShowRationale((value) => !value)}
            >
              <span className="rationale-bulb">i</span>
              <span>
                {showRationale
                  ? "Hide analyst rationale"
                  : "View analyst rationale"}
              </span>
              <FiArrowRight aria-hidden="true" />
            </button>
            {showRationale && (
              <div className="rationale-panel">
                <div className="rationale-heading">
                  <span>ANALYST RATIONALE</span>
                  <span className="rationale-technique">MITRE ATT&amp;CK</span>
                </div>
                <p>{question.rationale}</p>
              </div>
            )}

            <div className="question-footer">
              <Button
                variant="plain"
                className="nav-button back-button"
                onClick={() => moveQuestion(currentQuestion - 1)}
                disabled={currentQuestion === 1}
              >
                <FiArrowLeft />
                Back
              </Button>
              <span className="answer-counter">
                {answeredCount} of {totalQuestions} answered
              </span>
              <Button
                variant="plain"
                className="nav-button next-button"
                onClick={() => moveQuestion(currentQuestion + 1)}
                disabled={currentQuestion === totalQuestions}
              >
                Next question
                <FiArrowRight />
              </Button>
            </div>
          </section>

          <aside className="side-column">
            <QuestionNavigator
              questions={visibleQuestions}
              currentQuestion={currentQuestion}
              answers={answers}
              bookmarked={bookmarked}
              answeredCount={answeredCount}
              totalQuestions={totalQuestions}
              onNavigate={moveQuestion}
            />

            <section className="domains-panel">
              <div className="panel-heading">
                <div>
                  <span className="panel-overline">FOCUS AREA</span>
                  <h2>Exam domains</h2>
                </div>
                <span className="domain-count">04</span>
              </div>
              <div className="domain-list">
                {examCategories.map((item, index) => (
                  <button
                    className={`domain-row ${category === item ? "is-active" : ""}`}
                    key={item}
                    onClick={() => changeCategory(item)}
                  >
                    <span className="domain-marker">
                      {String(index).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                    <span className="domain-arrow">
                      <FiArrowRight />
                    </span>
                  </button>
                ))}
              </div>
            </section>

            <section className="integrity-note">
              <span className="integrity-mark">
                <FiInfo />
              </span>
              <div>
                <strong>Exam integrity</strong>
                <p>Your answers are saved in this session as you go.</p>
              </div>
            </section>
          </aside>
        </div>
      </main>

      <div className="creator-widget">
        <img src="/tim.jpeg" alt="CyberCase Lab host" />
        <div className="creator-copy">
          <span>STUDY WITH</span>
          <strong>Tims TCHOUAMOU</strong>
          <a
            href="https://www.youtube.com/@CyberCaseLab"
            target="_blank"
            rel="noreferrer"
          >
            Subscribe on YouTube <FiArrowRight />
          </a>
        </div>
        <span className="creator-live" aria-label="Creator feature" />
      </div>

      {modal && (
        <div
          className="modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setModal(null);
          }}
        >
          <section
            className={`modal-panel ${modal === "finish" && submitted ? "assessment-results-panel" : ""}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <Button
              variant="plain"
              className="modal-close icon-button"
              onClick={() => setModal(null)}
              aria-label="Close dialog"
            >
              <FiX />
            </Button>
            {modal === "finish" && submitted ? (
              <>
                <span className="modal-kicker">ASSESSMENT COMPLETE</span>
                <h2 id="modal-title">
                  Results: {correctCount} of {totalQuestions} correct
                </h2>
                <p>
                  {answeredCount} questions answered. Each option includes its
                  definition and example; the rationale explains the correct
                  answer.
                </p>
                <div className="assessment-review-list">
                  {examQuestions.map((item) => {
                    const selected = answers[item.number] ?? [];
                    const isCorrect =
                      selected.length === item.correct.length &&
                      item.correct.every((letter) => selected.includes(letter));

                    return (
                      <article
                        className={`assessment-review-question ${isCorrect ? "is-correct" : "is-incorrect"}`}
                        key={item.number}
                      >
                        <div className="assessment-review-heading">
                          <span>
                            Question {item.number} · {item.tag}
                          </span>
                          <strong>{isCorrect ? "Correct" : "Incorrect"}</strong>
                        </div>
                        <h3>{item.prompt}</h3>
                        <div className="assessment-review-answers">
                          {item.answers.map(([letter, answer]) => {
                            const isSelected = selected.includes(letter);
                            const isAnswerCorrect = item.correct.includes(letter);
                            const guide = answerGuides[answer];
                            let answerStatus = "Incorrect option";
                            if (isSelected && isAnswerCorrect) {
                              answerStatus = "Your correct response";
                            } else if (isSelected) {
                              answerStatus = "Your incorrect response";
                            } else if (isAnswerCorrect) {
                              answerStatus = "Missed correct answer";
                            } else if (selected.length === 0) {
                              answerStatus = "Not selected";
                            }

                            return (
                              <div
                                className={`assessment-review-answer ${isAnswerCorrect ? "is-answer" : "is-distractor"} ${isSelected ? "is-selected" : ""}`}
                                key={letter}
                              >
                                <div className="assessment-review-answer-title">
                                  <strong>{letter}. {answer}</strong>
                                  <span>{answerStatus}</span>
                                </div>
                                <p>{guide.definition}</p>
                                <p className="assessment-review-example">
                                  Example: {guide.example}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                        <div className="assessment-review-rationale">
                          <strong>Why</strong>
                          <p>{item.rationale}</p>
                        </div>
                      </article>
                    );
                  })}
                </div>
                <div className="modal-actions">
                  <Button
                    variant="plain"
                    className="modal-primary"
                    onClick={() => setModal(null)}
                  >
                    Done
                  </Button>
                </div>
              </>
            ) : modal === "finish" ? (
              <>
                <span className="modal-kicker">ASSESSMENT SUMMARY</span>
                <h2 id="modal-title">Finish this test?</h2>
                <p>
                  You have answered{" "}
                  <strong>{answeredCount} of {totalQuestions} questions</strong>. Unanswered
                  questions will be submitted as blank.
                </p>
                <div className="summary-progress">
                  <span style={{ width: `${(answeredCount / totalQuestions) * 100}%` }} />
                </div>
                <div className="modal-actions">
                  <Button
                    variant="plain"
                    className="modal-secondary"
                    onClick={() => setModal(null)}
                  >
                    Keep working
                  </Button>
                  <Button
                    variant="plain"
                    className="modal-primary"
                    onClick={() => setSubmitted(true)}
                  >
                    Submit assessment
                  </Button>
                </div>
              </>
            ) : (
              <>
                <span className="modal-kicker">HELP US IMPROVE</span>
                <h2 id="modal-title">Share feedback</h2>
                {feedbackSent ? (
                  <p className="feedback-confirmation">
                    <FiCheck />
                    Thanks for helping us improve the exam experience.
                  </p>
                ) : (
                  <>
                    <p>Tell us about the exam experience.</p>
                    <textarea
                      className="feedback-input"
                      placeholder="What could work better?"
                      rows={4}
                    />
                    <div className="modal-actions">
                      <Button
                        variant="plain"
                        className="modal-secondary"
                        onClick={() => setModal(null)}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="plain"
                        className="modal-primary"
                        onClick={() => setFeedbackSent(true)}
                      >
                        Send feedback
                      </Button>
                    </div>
                  </>
                )}
              </>
            )}
          </section>
        </div>
      )}
    </div>
  );
}
