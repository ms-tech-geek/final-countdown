const ResultModal = ({ result, targetTime }) => {
  return (
    <dialog className="result-modal" open>
      <h2>You {result}</h2>
      <p>
        The target tune was <strong>{targetTime}</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      <form method="dialog">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default ResultModal;
