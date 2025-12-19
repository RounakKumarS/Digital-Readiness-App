import { useState } from "react";

export default function BusinessForm({ next, setBusinessData }) {
  const [formData, setFormData] = useState({
    turnover: "",
    employees: "",
    offices: "",
    age: "",
    gender: "",
    industry: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    setBusinessData(formData);
    next();
  };

  const isDisabled = Object.values(formData).some(v => !v);

  const fields = [
    {
      label: "Annual Turnover",
      name: "turnover",
      options: ["< 10 Lakh", "10–50 Lakh", "50 Lakh – 1 Cr", "1 Cr – 5 Cr", "> 5 Cr"]
    },
    {
      label: "Number of Employees",
      name: "employees",
      options: ["1–10", "11–50", "51–100", "101–500", "> 500"]
    },
    {
      label: "Number of Offices",
      name: "offices",
      options: ["1", "2–5", "6–10", "> 10"]
    },
    {
      label: "Business Age",
      name: "age",
      options: ["< 1 year", "1–3 years", "3–5 years", "5–10 years", "> 10 years"]
    },
    {
      label: "Gender",
      name: "gender",
      options: ["Male", "Female", "Other"]
    },
    {
      label: "Industry",
      name: "industry",
      options: [
        "Retail",
        "IT / Software",
        "Manufacturing",
        "Healthcare",
        "Education",
        "Hospitality",
        "Other"
      ]
    }
  ];

  return (
    <div className="container">
      <h2 className="page-title">Business Details</h2>
      <p className="page-subtitle">
        Help us understand your business better.
      </p>

      {fields.map(field => (
        <div className="form-group" key={field.name}>
          <label>{field.label}</label>
          <select
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
          >
            <option value="">Select {field.label}</option>
            {field.options.map(opt => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      ))}

      <div className="actions">
        <button onClick={handleSubmit} disabled={isDisabled}>
          Continue
        </button>
      </div>
    </div>
  );
}
