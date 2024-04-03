import useStore from "./hooks/useStore";

const Winner = () => {
  const winner = useStore((state) => state.winner);

  return (
    <>
      <div>Winner</div>
      <h1>{winner.name}</h1>
    </>
  );
};

export default Winner;
