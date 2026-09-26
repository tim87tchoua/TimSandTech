import {
  configureStore,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

type ExamState = {
  currentQuestion: number;
  answers: Record<number, string>;
  remainingSeconds: number;
  paused: boolean;
  category: string;
  darkMode: boolean;
  readModules: number[];
};

const initialState: ExamState = {
  currentQuestion: 3,
  answers: {},
  remainingSeconds: 1 * 60 * 60 + 26 * 60 + 18,
  paused: false,
  category: "All domains",
  darkMode: false,
  readModules: [],
};

const examSlice = createSlice({
  name: "exam",
  initialState,
  reducers: {
    goToQuestion(state, action: PayloadAction<number>) {
      state.currentQuestion = Math.min(30, Math.max(1, action.payload));
    },
    selectAnswer(
      state,
      action: PayloadAction<{ question: number; answer: string }>,
    ) {
      state.answers[action.payload.question] = action.payload.answer;
    },
    tick(state) {
      if (!state.paused && state.remainingSeconds > 0)
        state.remainingSeconds -= 1;
    },
    togglePause(state) {
      state.paused = !state.paused;
    },
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    toggleTheme(state) {
      state.darkMode = !state.darkMode;
    },
    markModuleRead(state, action: PayloadAction<number>) {
      if (!state.readModules.includes(action.payload)) {
        state.readModules.push(action.payload);
      }
    },
  },
});

export const {
  goToQuestion,
  selectAnswer,
  setCategory,
  tick,
  togglePause,
  toggleTheme,
  markModuleRead,
} = examSlice.actions;

export const store = configureStore({ reducer: { exam: examSlice.reducer } });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
