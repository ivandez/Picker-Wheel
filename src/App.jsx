import { useState } from "react";
import FortuneWheel from "./components/FortuneWheel";
import { useForm } from "react-hook-form";
import useStore from "./hooks/useStore";
import { useNavigate } from "react-router-dom";

import "./App.css";

function App() {
  const { register, handleSubmit, resetField } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    setSegments([
      ...segments,
      { name: data.option, uuid: self.crypto.randomUUID() },
    ]);
    resetField("option");
  };

  const updateWinner = useStore((state) => state.updateWinner);

  const onFinished = (winner) => {
    updateWinner(winner);
    setTimeout(() => {
      navigate("/winner");
    }, 1000);
  };

  const handleDelete = (itemToDeleteUUID) => {
    setSegments((prevItems) =>
      prevItems.filter((item) => item.uuid !== itemToDeleteUUID)
    );
  };

  const [segments, setSegments] = useState([]);

  let wheelSize = 0;

  if (window.innerWidth <= 992) {
    wheelSize = 150;
  } else {
    wheelSize = 290;
  }

  const defaultSegments = [
    { name: "Example 1", uuid: self.crypto.randomUUID() },
    { name: "Example 2", uuid: self.crypto.randomUUID() },
    { name: "Example 3", uuid: self.crypto.randomUUID() },
  ];

  return (
    <div className="container">
      {segments.length === 0 ? (
        <FortuneWheel
          segments={defaultSegments}
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
      ) : (
        <>
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
        </>
      )}
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
        {segments.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Input</th>
                <th>Option</th>
              </tr>
            </thead>
            <tbody>
              {segments.map((segment) => {
                return (
                  <tr key={segment.uuid}>
                    <td>{segment.name}</td>
                    <td>
                      <button
                        className="delete-button"
                        type="submit"
                        onClick={() => handleDelete(segment.uuid)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </form>
    </div>
  );
}

export default App;
