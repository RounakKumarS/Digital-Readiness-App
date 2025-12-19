export default function Landing({ next }) {
  return (
    <div className="page-container">
      <h1 className="page-title">
        Digital Readiness Assessment
      </h1>

      <p className="page-subtitle">
        Answer a few questions to evaluate how digitally prepared
        your business is across strategy, operations, workspace,
        and customer engagement.
      </p>

      <div className="actions">
        <button onClick={next}>
          Start Assessment
        </button>
      </div>
    </div>
  );
}