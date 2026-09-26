import { Button } from "@chakra-ui/react";
import { FiArrowLeft, FiMoon, FiSun } from "react-icons/fi";
import { Link } from "react-router-dom";

type CourseHeaderProps = {
  darkMode: boolean;
  onThemeToggle: () => void;
  backLabel?: string;
  backTo?: string;
};

export default function CourseHeader({
  darkMode,
  onThemeToggle,
  backLabel = "Exam workspace",
  backTo = "/",
}: CourseHeaderProps) {
  return (
    <header className="course-topbar">
      <Link className="brand" to={backTo} aria-label="TimsandTech home">
        <span className="brand-mark">
          <span />
        </span>
        <span className="brand-name">
          Timsand<span>Tech</span>
        </span>
      </Link>
      <div className="course-topbar-title">
        <span>LEARNING PATH</span>
        <strong>Security+ course</strong>
      </div>
      <nav className="course-topbar-actions" aria-label="Course navigation">
        <Link className="course-back-link" to={backTo}>
          <FiArrowLeft />
          {backLabel}
        </Link>
        <Button
          variant="plain"
          className="icon-button"
          onClick={onThemeToggle}
          aria-label={
            darkMode ? "Switch to light theme" : "Switch to dark theme"
          }
          title={darkMode ? "Switch to light theme" : "Switch to dark theme"}
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </Button>
      </nav>
    </header>
  );
}
