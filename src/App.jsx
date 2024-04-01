import { useState } from "react";
import FortuneWheel from "./components/FortuneWheel";
import { useForm } from "react-hook-form";

function App() {
  // const segments = ["better luck next time", "won 70", "won 10"];

  const segColors = ["#EE4040", "#F0CF50", "#815CD1"];

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setSegments([...segments, data.option]);
  };

  const onFinished = (winner) => {
    console.log(winner);
  };

  const [segments, setSegments] = useState(["won 5", "won 70", "won 10"]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <input type="text" {...register("option")} />
    </form>
  );
}

export default App;
