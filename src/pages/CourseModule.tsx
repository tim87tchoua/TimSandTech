import { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheck,
  FiClock,
  FiPause,
  FiPlay,
  FiSquare,
  FiTarget,
  FiVolume2,
} from "react-icons/fi";
import CourseHeader from "../components/courses/CourseHeader";
import { courseModules } from "../data/courseModules";
import {
  markModuleRead,
  toggleTheme,
  type AppDispatch,
  type RootState,
} from "../store/examStore";

export default function CourseModule() {
  const { moduleId } = useParams();
  const module = courseModules.find((item) => item.id === Number(moduleId));
  const dispatch = useDispatch<AppDispatch>();
  const { darkMode, readModules } = useSelector(
    (state: RootState) => state.exam,
  );
  const [isReading, setIsReading] = useState(false);
  const [voiceStatus, setVoiceStatus] = useState<
    "idle" | "speaking" | "paused" | "unavailable"
  >("idle");
  const isRead = module ? readModules.includes(module.id) : false;
  const moduleToReadId = module?.id;

  useEffect(() => {
    return () => {
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    };
  }, [moduleId]);

  if (!module) {
    return (
      <div className={`course-app ${darkMode ? "theme-dark" : ""}`}>
        <CourseHeader
          darkMode={darkMode}
          onThemeToggle={() => dispatch(toggleTheme())}
          backTo="/courses"
          backLabel="All modules"
        />
        <main className="course-main course-not-found">
          <span className="course-eyebrow">MODULE NOT FOUND</span>
          <h1>This module is unavailable.</h1>
          <Link className="module-primary-link" to="/courses">
            Back to all modules <FiArrowRight />
          </Link>
        </main>
      </div>
    );
  }

  const previousModule = courseModules.find(
    (item) => item.id === module.id - 1,
  );
  const nextModule = courseModules.find((item) => item.id === module.id + 1);

  function startVoiceReading(text?: string) {
    if (!("speechSynthesis" in window)) {
      setVoiceStatus("unavailable");
      return;
    }

    const moduleForSpeech = courseModules.find(
      (item) => item.id === moduleToReadId,
    );
    if (!moduleForSpeech) return;

    window.speechSynthesis.cancel();
    const readingText =
      text ??
      `${moduleForSpeech.title}. ${moduleForSpeech.lessons
        .map(
          (lesson) =>
            `${lesson.heading}. ${lesson.subheadings
              .map(
                (subheading) =>
                  `${subheading.heading}. ${subheading.content} In practice. ${subheading.example}`,
              )
              .join(" ")}`,
        )
        .join(" ")}`;
    const utterance = new SpeechSynthesisUtterance(readingText);
    utterance.rate = 0.95;
    utterance.onstart = () => setVoiceStatus("speaking");
    utterance.onend = () => setVoiceStatus("idle");
    utterance.onerror = () => setVoiceStatus("idle");
    setVoiceStatus("speaking");
    window.speechSynthesis.speak(utterance);
  }

  function beginReading() {
    if (moduleToReadId === undefined) return;
    setIsReading(true);
    dispatch(markModuleRead(moduleToReadId));
    startVoiceReading();
  }

  function toggleVoicePlayback() {
    if (voiceStatus === "speaking") {
      window.speechSynthesis.pause();
      setVoiceStatus("paused");
    } else if (voiceStatus === "paused") {
      window.speechSynthesis.resume();
      setVoiceStatus("speaking");
    } else {
      startVoiceReading();
    }
  }

  function stopVoicePlayback() {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    setVoiceStatus("idle");
  }

  return (
    <div className={`course-app ${darkMode ? "theme-dark" : ""}`}>
      <CourseHeader
        darkMode={darkMode}
        onThemeToggle={() => dispatch(toggleTheme())}
        backTo="/courses"
        backLabel="All modules"
      />
      <main className="course-main module-detail-main">
        <nav className="module-breadcrumb" aria-label="Breadcrumb">
          <Link to="/courses">Course modules</Link>
          <span>/</span>
          <span>Module {String(module.id).padStart(2, "0")}</span>
        </nav>
        <section className="module-intro">
          <div className="module-intro-main">
            <div className="course-eyebrow">
              MODULE {String(module.id).padStart(2, "0")} /{" "}
              {module.category.toUpperCase()}
            </div>
            <h1>{module.title}</h1>
            <p className="module-summary">{module.objective}</p>
            <div className="module-meta">
              <span>
                <FiClock />
                {module.duration}
              </span>
              <span>
                <FiTarget />
                {module.lessons.length} lessons
              </span>
              {isRead && (
                <span className="module-complete-label">
                  <FiCheck />
                  Read
                </span>
              )}
            </div>
            <Button
              variant="plain"
              className="module-primary-action"
              onClick={beginReading}
            >
              {isReading || isRead ? "Read module again" : "Read module"}
              <FiVolume2 />
            </Button>
          </div>
          <div className="module-index-art" aria-hidden="true">
            <span>{String(module.id).padStart(2, "0")}</span>
            <i />
          </div>
        </section>

        <div className="module-detail-grid">
          <section className="objectives-panel">
            <span className="course-eyebrow">MODULE OBJECTIF</span>
            <h2>By the end of this module you will learn how to:</h2>
            <div>
              {[
                "Summarize information security concepts",
                "Compare and contrast security control types",
                "Describe security roles and responsibilities",
              ].map((objective) => (
                <p key={objective}>
                  <FiCheck />
                  {objective}
                </p>
              ))}
            </div>
          </section>
          <section className="lesson-outline">
            <div className="lesson-outline-heading">
              <div>
                <span className="course-eyebrow">MODULE AGENDA</span>
                <h2>{module.lessons.length} short lessons</h2>
              </div>
              <span>{module.duration}</span>
            </div>
            {module.lessons.map((lesson, index) => (
              <div className="lesson-outline-row" key={lesson.heading}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{lesson.heading}</strong>
                <span>
                  <FiClock />
                  {Math.max(
                    4,
                    Math.round(
                      parseInt(module.duration, 10) / module.lessons.length,
                    ),
                  )}{" "}
                  min
                </span>
              </div>
            ))}
          </section>
        </div>

        {isReading && (
          <article
            className="reading-content"
            aria-label={`${module.title} reading content`}
          >
            <div className="reading-header">
              <div>
                <span className="course-eyebrow">
                  READING / MODULE {String(module.id).padStart(2, "0")}
                </span>
                <h2>{module.title}</h2>
              </div>
              <div
                className="reading-voice-controls"
                role="group"
                aria-label="Audio reading controls"
              >
                {voiceStatus === "unavailable" ? (
                  <span className="voice-unavailable">
                    Audio reading is not supported in this browser.
                  </span>
                ) : (
                  <>
                    <Button
                      variant="plain"
                      className="voice-control voice-play"
                      onClick={toggleVoicePlayback}
                      aria-label={
                        voiceStatus === "speaking"
                          ? "Pause audio reading"
                          : voiceStatus === "paused"
                            ? "Resume audio reading"
                            : "Read aloud"
                      }
                    >
                      {voiceStatus === "speaking" ? <FiPause /> : <FiPlay />}
                      {voiceStatus === "speaking"
                        ? "Pause"
                        : voiceStatus === "paused"
                          ? "Resume"
                          : "Read aloud"}
                    </Button>
                    {voiceStatus !== "idle" && (
                      <Button
                        variant="plain"
                        className="voice-control voice-stop"
                        onClick={stopVoicePlayback}
                        aria-label="Stop audio reading"
                      >
                        <FiSquare />
                        Stop
                      </Button>
                    )}
                  </>
                )}
              </div>
            </div>
            <div className="reading-status">
              <FiCheck />
              Module saved as read
            </div>
            {module.lessons.map((lesson, index) => (
              <section className="reading-lesson" key={lesson.heading}>
                <div className="reading-lesson-index">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="reading-lesson-body">
                  <h3>{lesson.heading}</h3>
                  {lesson.subheadings.map((subheading) => (
                    <div key={subheading.heading}>
                      <h4>{subheading.heading}</h4>
                      <div className="reading-paragraph">
                        <p>{subheading.content}</p>
                        <Button
                          variant="plain"
                          className="voice-control paragraph-voice-control"
                          onClick={() => startVoiceReading(subheading.content)}
                          aria-label={`Read paragraph aloud: ${subheading.heading}`}
                          title="Read paragraph aloud"
                        >
                          <FiVolume2 />
                        </Button>
                      </div>
                      {subheading.image && (
                        <img
                          className="subheading-image"
                          src={subheading.image}
                          alt="Cybersecurity framework illustration referenced in the paragraph."
                        />
                      )}
                      <aside className="lesson-example">
                        <span>IN PRACTICE</span>
                        <div className="reading-paragraph">
                          <p>{subheading.example}</p>
                          <Button
                            variant="plain"
                            className="voice-control paragraph-voice-control"
                            onClick={() => startVoiceReading(subheading.example)}
                            aria-label={`Read example aloud: ${subheading.heading}`}
                            title="Read example aloud"
                          >
                            <FiVolume2 />
                          </Button>
                        </div>
                      </aside>
                    </div>
                  ))}
                </div>
              </section>
            ))}
            <div className="reading-complete">
              <FiCheck />
              <div>
                <strong>Module marked as read</strong>
                <span>Your course progress is updated.</span>
              </div>
              <Link to="/courses">
                Back to modules <FiArrowRight />
              </Link>
            </div>
          </article>
        )}

        <nav className="module-pagination" aria-label="Module navigation">
          {previousModule ? (
            <Link to={`/courses/${previousModule.id}`}>
              <FiArrowLeft />
              <span>
                <small>PREVIOUS MODULE</small>
                <strong>{previousModule.title}</strong>
              </span>
            </Link>
          ) : (
            <span />
          )}
          {nextModule ? (
            <Link className="next-module-link" to={`/courses/${nextModule.id}`}>
              <span>
                <small>NEXT MODULE</small>
                <strong>{nextModule.title}</strong>
              </span>
              <FiArrowRight />
            </Link>
          ) : (
            <Link className="next-module-link" to="/">
              Return to exam <FiArrowRight />
            </Link>
          )}
        </nav>
      </main>
    </div>
  );
}
