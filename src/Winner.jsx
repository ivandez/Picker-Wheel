import useStore from "./hooks/useStore";

import "./winner.css";

const Winner = () => {
  const winner = useStore((state) => state.winner);

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
    </section>
  );
};

export default Winner;
