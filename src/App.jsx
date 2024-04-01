import FortuneWheel from "./components/FortuneWheel";

function App() {
  const segments = ["better luck next time", "won 70", "won 10"];

  const segColors = ["#EE4040", "#F0CF50", "#815CD1"];

  const onFinished = (winner) => {
    console.log(winner);
  };

  return (
    <FortuneWheel
      segments={segments}
      segColors={segColors}
      onFinished={(winner) => onFinished(winner)}
      primaryColor="black"
      contrastColor="white"
      buttonText="Spin"
      isOnlyOnce={false}
      size={290}
      upDuration={250}
      downDuration={600}
      fontFamily="Arial"
    />
  );
}

export default App;
