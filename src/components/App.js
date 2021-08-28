import { useState } from 'react';
import Container from './container/Container';
import Statistics from './feedback/section/Statistics';
import Section from './feedback/section/Section';
import FeedbackOptions from './feedback/feedbackOptions/FeedbackOptions';
import Notification from './feedback/notification/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = Object.keys({ good, neutral, bad });

  const onLeaveFeedback = type => {
    if (type === 'good') {
      setGood(state => state + 1);
    }

    if (type === 'neutral') {
      setNeutral(state => state + 1);
    }

    if (type === 'bad') {
      setBad(state => state + 1);
    }
  };

  const countTotalFeedback = good + neutral + bad;

  const countPositiveFeedbackPercentage = Math.round(
    (good * 100) / countTotalFeedback,
  );

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback === 0 ? (
          <Notification message="No feedback given"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        )}
      </Section>
    </Container>
  );
}

export default App;
