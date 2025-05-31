import { useState } from "react";
import "./App.css";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";
// import Description from "./components/Description/Description";

export default function App() {
  const initialState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedback, setFeedback] = useState(initialState);

  const totalFeedback = Object.values(feedback).reduce(
    (acc, value) => acc + value,
    0
  );

  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  function updateFeedback(type) {
    setFeedback({ ...feedback, [type]: feedback[type] + 1 });
  }

  function resetFeedbak() {
    setFeedback(initialState);
  }

  return (
    <>
      <Options
        updateFeedback={updateFeedback}
        resetFeedbak={resetFeedbak}
        total={totalFeedback}
        types={Object.keys(feedback)}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={[
            ...Object.entries(feedback),
            ["total", totalFeedback],
            ["positive", positiveFeedback],
          ]}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
