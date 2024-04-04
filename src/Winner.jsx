import useStore from "./hooks/useStore";
import { useNavigate } from "react-router-dom";

import "./winner.css";

const Winner = () => {
  const winner = useStore((state) => state.winner);

  const navigate = useNavigate();

  const removeWinner = useStore((state) => state.removeWinner);

  return (
    <section className="winner-container">
      <div className="winner-wrap">
        <div className="border"></div>
        <h1>Congradulations!</h1>
        <h2>The winner is:</h2>
        <div className="winner-ribbon">{winner.name}</div>
        <div className="right-ribbon"></div>
        <div className="left-ribbon"></div>
      </div>
      <button
        className="winner-button"
        type="submit"
        onClick={() => {
          removeWinner();
          navigate("/");
        }}
      >
        Go back to home
      </button>
    </section>
  );
};

export default Winner;
