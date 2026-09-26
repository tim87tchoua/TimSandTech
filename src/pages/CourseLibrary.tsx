import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FiArrowRight, FiBookOpen, FiCheck, FiClock } from "react-icons/fi";
import CourseHeader from "../components/courses/CourseHeader";
import { courseModules } from "../data/courseModules";
import {
  toggleTheme,
  type AppDispatch,
  type RootState,
} from "../store/examStore";

export default function CourseLibrary() {
  const dispatch = useDispatch<AppDispatch>();
  const { darkMode, readModules } = useSelector(
    (state: RootState) => state.exam,
  );
  const percentage = Math.round(
    (readModules.length / courseModules.length) * 100,
  );

  return (
    <div className={`course-app ${darkMode ? "theme-dark" : ""}`}>
      <CourseHeader
        darkMode={darkMode}
        onThemeToggle={() => dispatch(toggleTheme())}
      />
      <main className="course-main">
        <div className="course-overview">
          <div>
            <div className="course-eyebrow">TIMSANDTECH / LEARNING PATH</div>
            <h1>Security+ course modules</h1>
            <p className="course-lede">
              Sixteen focused modules, from security fundamentals to threat
              frameworks and exam readiness.
            </p>
          </div>
          <div className="course-progress-block">
            <div className="course-progress-label">
              <span>YOUR PROGRESS</span>
              <strong>
                {readModules.length}
                <i> / 16 read</i>
              </strong>
            </div>
            <div className="course-progress-track">
              <span style={{ width: `${percentage}%` }} />
            </div>
            <span className="course-progress-footnote">
              {percentage}% complete
            </span>
          </div>
        </div>

        <div className="module-grid" aria-label="Course modules">
          {courseModules.map((module) => {
            const isRead = readModules.includes(module.id);
            return (
              <article
                className={`module-card ${isRead ? "is-read" : ""}`}
                key={module.id}
              >
                <div className="module-card-top">
                  <span className="module-number">
                    {String(module.id).padStart(2, "0")}
                  </span>
                  {isRead ? (
                    <span className="module-read-state">
                      <FiCheck />
                      READ
                    </span>
                  ) : (
                    <span className="module-category">{module.category}</span>
                  )}
                </div>
                <h2>{module.title}</h2>
                <p>{module.objective}</p>
                <div className="module-card-footer">
                  <span>
                    <FiClock />
                    {module.duration}
                  </span>
                  <Link
                    to={`/courses/${module.id}`}
                    aria-label={`Open module ${module.id}: ${module.title}`}
                  >
                    Open module <FiArrowRight />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
        <div className="course-library-foot">
          <FiBookOpen />
          <span>
            Choose a module to review its objectives and lesson content.
          </span>
        </div>
      </main>
    </div>
  );
}
