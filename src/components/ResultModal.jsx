import { forwardRef, useImperativeHandle, useRef } from 'react';

const ResultModal = forwardRef(
  ({ targetTime, remainingTime, onReset }, ref) => {
    const dialog = useRef();

    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

    useImperativeHandle(ref, () => {
      return {
        open() {
          dialog.current.showModal();
        },
      };
    });

    return (
      <dialog className="result-modal" ref={dialog}>
        {userLost && <h2>You lost!</h2>}
        <p>
          The target tune was <strong>{targetTime}</strong>
        </p>
        <p>
          You stopped the timer with{' '}
          <strong>{formattedRemainingTime} seconds left.</strong>
        </p>
        <form method="dialog" onSubmit={onReset}>
          <button>close</button>
        </form>
      </dialog>
    );
  }
);

export default ResultModal;
