import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function PersonalDetails({ next, setPersonalData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [otpSent, setOtpSent] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [otp, setOtp] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState("");

  const generateOtp = () =>
    Math.floor(100000 + Math.random() * 900000).toString();

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendOtp = async () => {
    if (!email) return;

    const newOtp = generateOtp();
    setGeneratedOtp(newOtp);
    setError("");

    try {
      await emailjs.send(
  SERVICE_ID,
  TEMPLATE_ID,
  {
    to_email: email,
    otp: newOtp
  },
  PUBLIC_KEY
);

      setOtpSent(true);
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError("Failed to send OTP. Try again.");
    }
  };

  const verifyOtp = () => {
    if (otp === generatedOtp) {
      setVerified(true);
      setError("");
      setPersonalData({ name, email });
    } else {
      setError("Invalid OTP");
    }
  };

  return (
    <div className="container">
      <h2 className="page-title">Personal Details</h2>

      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          disabled={verified}
        />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          disabled={otpSent}
        />
      </div>

      {!otpSent && (
        <button onClick={sendOtp} disabled={!name || !email}>
          Send OTP
        </button>
      )}

      {otpSent && !verified && (
        <>
          <div className="form-group">
            <label>Enter OTP</label>
            <input
              value={otp}
              onChange={e => setOtp(e.target.value)}
            />
          </div>
          <button onClick={verifyOtp}>
            Verify OTP
          </button>
        </>
      )}

      {verified && (
        <p style={{ color: "green", marginTop: "10px" }}>
          ✅ Email verified successfully
        </p>
      )}

      {error && (
        <p style={{ color: "red", marginTop: "10px" }}>
          {error}
        </p>
      )}


      <div style={{ marginTop: "20px" }}>
        <button
          onClick={next}
          disabled={!verified}
        >
          Next
        </button>
      </div>
    </div>
  );
}
