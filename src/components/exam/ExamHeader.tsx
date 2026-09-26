import { Button } from "@chakra-ui/react";
import {
  FiClock,
  FiInfo,
  FiMoon,
  FiPause,
  FiPlay,
  FiSun,
} from "react-icons/fi";
import { Link } from "react-router-dom";

type ExamHeaderProps = {
  currentQuestion: number;
  remainingSeconds: number;
  paused: boolean;
  darkMode: boolean;
  onPause: () => void;
  onThemeToggle: () => void;
  onFinish: () => void;
  onFeedback: () => void;
};

function formatTime(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainder = seconds % 60;
  return [hours, minutes, remainder]
    .map((part) => String(part).padStart(2, "0"))
    .join(":");
}

export default function ExamHeader({
  currentQuestion,
  remainingSeconds,
  paused,
  darkMode,
  onPause,
  onThemeToggle,
  onFinish,
  onFeedback,
}: ExamHeaderProps) {
  return (
    <header className="topbar">
      <Link className="brand" to="/" aria-label="TimsandTech home">
        <span className="brand-mark">
          <span />
        </span>
        <span className="brand-name">
          Timsand<span>Tech</span>
        </span>
      </Link>
      <div className="exam-label">
        <span className="live-dot" />
        EXAM MODE <FiInfo aria-hidden="true" />
      </div>
      <div className="header-progress">
        <div className="progress-copy">
          <span>Security operations assessment</span>
          <strong>
            {currentQuestion}
            <i>/</i>30
          </strong>
        </div>
        <div
          className="progress-track"
          role="progressbar"
          aria-label="Exam progress"
          aria-valuenow={currentQuestion}
          aria-valuemin={1}
          aria-valuemax={30}
        >
          <span style={{ width: `${(currentQuestion / 30) * 100}%` }} />
        </div>
      </div>
      <div className="timer-block" aria-live="polite">
        <FiClock aria-hidden="true" />
        <span className={remainingSeconds < 600 ? "timer-low" : ""}>
          {formatTime(remainingSeconds)}
        </span>
        <Button
          variant="plain"
          className="icon-button timer-control"
          onClick={onPause}
          title={paused ? "Resume timer" : "Pause timer"}
          aria-label={paused ? "Resume timer" : "Pause timer"}
        >
          {paused ? <FiPlay /> : <FiPause />}
        </Button>
      </div>
      <button className="feedback-link" onClick={onFeedback}>
        Share feedback
      </button>
      <Button
        variant="plain"
        className="theme-toggle icon-button"
        onClick={onThemeToggle}
        title={darkMode ? "Switch to light theme" : "Switch to dark theme"}
        aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
      >
        {darkMode ? <FiSun /> : <FiMoon />}
      </Button>
      <Button variant="plain" className="finish-button" onClick={onFinish}>
        Finish test
      </Button>
    </header>
  );
}
