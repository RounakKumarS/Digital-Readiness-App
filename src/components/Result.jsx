import jsPDF from "jspdf";

export default function Result({ answers, onRetake }) {
  let score = 0;
  let maxScore = 0;

  const maturityScore = {
    "No plans": 0,
    "Being planned": 1,
    "Being implemented": 2,
    "Already in use": 3
  };

  Object.values(answers).forEach(section => {
    Object.values(section).forEach(q => {
      if (q.type === "checkbox") {
        score += q.answer.length;
        maxScore += q.maxScore;
      } else if (q.type === "maturity") {
        score += maturityScore[q.answer] || 0;
        maxScore += q.maxScore;
      } else {
        score += 1;
        maxScore += q.maxScore;
      }
    });
  });

  const percentage = maxScore
    ? Math.round((score / maxScore) * 100)
    : 0;


  const downloadReport = () => {
    const previous =
      JSON.parse(localStorage.getItem("readinessReports")) || [];

    localStorage.setItem(
      "readinessReports",
      JSON.stringify([
        ...previous,
        {
          date: new Date().toISOString(),
          score: percentage,
          answers
        }
      ])
    );


    const doc = new jsPDF();
    let y = 20;

    doc.setFontSize(18);
    doc.text("Digital Readiness Assessment Report", 20, y);

    y += 15;
    doc.setFontSize(14);
    doc.text(`Overall Score: ${percentage}%`, 20, y);

    y += 10;
    doc.setFontSize(12);

    Object.entries(answers).forEach(([section, sectionAnswers]) => {
      y += 10;
      doc.setFont(undefined, "bold");
      doc.text(section.toUpperCase(), 20, y);

      doc.setFont(undefined, "normal");
      Object.values(sectionAnswers).forEach(q => {
        y += 8;
        const text = Array.isArray(q.answer)
          ? q.answer.join(", ")
          : q.answer;
        doc.text(`• ${text}`, 25, y);
      });

      if (y > 260) {
        doc.addPage();
        y = 20;
      }
    });

    doc.save("digital-readiness-report.pdf");
  };

  return (
    <div className="container">
      <h2 className="page-title">Digital Readiness Score</h2>


      <div className="score-wrapper">
        <div className="score-bar">
          <div
            className="score-fill"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <p className="score-text">{percentage}%</p>
      </div>

      <div className="result-actions">
  <button
    className="primary-btn"
    onClick={downloadReport}
  >
    Download PDF Report
  </button>

  <button
    className="secondary-btn"
    onClick={onRetake}
  >
    Retake Assessment
  </button>
</div>

    </div>
  );
}
