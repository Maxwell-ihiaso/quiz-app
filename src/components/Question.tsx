import { ILocalQuestion } from "../interfaces/Index";

interface IOption {
  index: number;
  text: string;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

interface IQuestionProps {
  question: ILocalQuestion;
  LocalQuestions: ILocalQuestion;
  timerId: NodeJS.Timer | undefined;
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>;
  setScoreCount: React.Dispatch<React.SetStateAction<number>>;
}

const Option = ({ index, text, onClick }: IOption) => {
  return (
    <div className="option" onClick={onClick}>
      <span>{String.fromCharCode(index + 65)}</span>
      {text}
    </div>
  );
};

const Question = ({
  question,
  LocalQuestions,
  timerId,
  setIsPaused,
  setScoreCount,
}: IQuestionProps) => {
  const handleOptionClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Add an active class to the selected option
    e.currentTarget.classList.add("active");

    // count the number of selected options that was correct
    if (
      e.currentTarget.textContent?.slice(1) ===
      LocalQuestions.options[LocalQuestions.options.length - 1]
    ) {
      setScoreCount((prevScore) => prevScore + 1);
    }

    // Once an option has been selected, disable all children
    document
      .querySelectorAll(".option:not(.active)")
      .forEach((elem) => elem.classList.add("disable-sibling"));

    document.querySelectorAll(".option").forEach((elem) => {
      // Add an aquacolour to the correct option
      if (
        elem.textContent?.slice(1) ===
        LocalQuestions.options[LocalQuestions.options.length - 1]
      ) {
        // alert("Correct");
        elem.classList.add("correct");
      }
    });

    // stop the timer once a selection has been made
    // You can choose to inform the user if their option
    // was the correct answer
    setIsPaused(true);
    clearTimeout(timerId);
  };

  return (
    <section className="quiz-container">
      {!question && <div>Unable to retrieve question</div>}
      <div className="quiz-question">{question?.question}</div>
      <div className="quiz-options">
        {question?.options?.map((opt, index) => (
          <Option
            key={index}
            text={opt}
            index={index}
            onClick={(e) => handleOptionClick(e)}
          />
        ))}
      </div>
    </section>
  );
};

export default Question;
