import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Step />
      <StepMessage step={1}>
        <p>Pass</p>
      </StepMessage>
    </div>
  );
}

function Step() {
  const [step, setStep] = useState(1);
  const [random, setRandom] = useState(Math.round(Math.random() * 10));
  const [test, setTest] = useState({ name: "Alex" });

  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
    setTest({ name: "Fred" });
  }

  function handleRandom() {
    setRandom(Math.round(Math.random() * 10));
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>
            {messages[step - 1]}
            <div>{random}</div>
            <div className="buttons">
              <Button
                bgColor="#e7e7e7"
                textColor="#333"
                onClick={() => alert("Learn")}
              >
                Learn how
              </Button>
            </div>
          </StepMessage>

          <div className="buttons">
            <Button
              bgColor={"#7950F2"}
              textColor="#fff"
              onClick={() => {
                handlePrevious();
                handleRandom();
              }}
            >
              <span>⬅️</span> Previous
            </Button>
            <Button
              bgColor={"#7950F2"}
              textColor="#fff"
              onClick={() => {
                handleNext();
                handleRandom();
              }}
            >
              Next <span>➡️</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

// the children prop allows the component to access whatever JSX is inside the <Button> </Button>
function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
