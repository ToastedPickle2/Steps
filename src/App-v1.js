import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [random, setRandom] = useState(Math.random());
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

          <p className="message">
            Step {step}: {messages[step - 1]}
            {random}
            {" " + test.name}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950F2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950F2", color: "#fff" }}
              onClick={() => {
                handleNext();
                handleRandom();
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
