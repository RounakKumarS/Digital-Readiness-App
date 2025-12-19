import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function EmailOTP({ onVerified }) {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");


  const createOtp = () =>
    Math.floor(100000 + Math.random() * 900000).toString();

  
  const sendOtp = async () => {
    if (!email) return;

    const newOtp = createOtp();
    setGeneratedOtp(newOtp);

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          to_email: email,
          otp: newOtp
        },
        "YOUR_PUBLIC_KEY"
      );

      setStep(2);
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError("Failed to send OTP. Try again.");
    }
  };

  const verifyOtp = () => {
    if (otp === generatedOtp) {
      onVerified(email);
    } else {
      setError("Invalid OTP");
    }
  };

  return (
    <div className="container">
      <h2 className="page-title">Email Verification</h2>

      {step === 1 && (
        <>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <button onClick={sendOtp}>Send OTP</button>
        </>
      )}

      {step === 2 && (
        <>
          <input
            placeholder="Enter 6-digit OTP"
            value={otp}
            onChange={e => setOtp(e.target.value)}
          />
          <button onClick={verifyOtp}>Verify OTP</button>
        </>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
