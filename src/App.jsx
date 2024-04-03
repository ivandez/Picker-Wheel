import { useState } from "react";
import FortuneWheel from "./components/FortuneWheel";
import { useForm } from "react-hook-form";

import "./App.css";

function App() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setSegments([...segments, data.option]);
  };

  const onFinished = (winner) => {
    console.log(winner);
  };

  const [segments, setSegments] = useState([]);

  let wheelSize = 0;

  if (window.innerWidth <= 992) {
    wheelSize = 150;
  } else {
    wheelSize = 290;
  }

  return (
    <div className="container">
      <FortuneWheel
        segments={segments}
        onFinished={(winner) => onFinished(winner)}
        primaryColor="black"
        contrastColor="white"
        buttonText="Spin"
        isOnlyOnce={false}
        size={wheelSize}
        upDuration={250}
        downDuration={600}
        fontFamily="Arial"
      />
      <form onSubmit={handleSubmit(onSubmit)} className="home-form">
        <div>
          <h2>Input:</h2>
          <input
            type="text"
            {...register("option")}
            placeholder="Write new option here"
            className="form-input"
          />
          <button className="form-button" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
