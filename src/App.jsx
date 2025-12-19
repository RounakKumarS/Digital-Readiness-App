import { useState } from "react";
import Landing from "./components/Landing";
import PersonalDetails from "./components/PersonalDetails";
import BusinessForm from "./components/BusinessForm";
import Assessment from "./components/Assessment";
import Result from "./components/Result";
import EmailOTP from "./components/EmailOTP";


export default function App() {
  const [step, setStep] = useState(0);

  const [PersonalData, setPersonalData] = useState({});
  const [BusinessData, setBusinessData] = useState({});
  const [answers, setAnswers] = useState({
    strategy: {},
    operations: {},
    workspace: {},
    customers: {}
  });

  // ✅ RESET FOR RETAKE
  const resetAssessment = () => {
    setStep(0);
    setPersonalData({});
    setBusinessData({});
    setAnswers({
      strategy: {},
      operations: {},
      workspace: {},
      customers: {}
    });
  };

  return (
    <>
      {step === 0 && <Landing next={() => setStep(1)} />}

      {step === 1 && (
        <PersonalDetails
          next={() => setStep(2)}
          setPersonalData={setPersonalData}
        />
      )}

      {step === 2 && (
        <BusinessForm
          next={() => setStep(3)}
          setBusinessData={setBusinessData}
        />
      )}

      {step === 3 && (
        <Assessment
          section="strategy"
          submit={(data) => {
            setAnswers(prev => ({ ...prev, strategy: data }));
            setStep(4);
          }}
        />
      )}

      {step === 4 && (
        <Assessment
          section="operations"
          submit={(data) => {
            setAnswers(prev => ({ ...prev, operations: data }));
            setStep(5);
          }}
        />
      )}

      {step === 5 && (
        <Assessment
          section="workspace"
          submit={(data) => {
            setAnswers(prev => ({ ...prev, workspace: data }));
            setStep(6);
          }}
        />
      )}

      {step === 6 && (
        <Assessment
          section="customers"
          submit={(data) => {
            setAnswers(prev => ({ ...prev, customers: data }));
            setStep(7);
          }}
        />
      )}

      {step === 7 && (
        <Result
          answers={answers}
          onRetake={resetAssessment}
        />
      )}
    </>
  );
}
