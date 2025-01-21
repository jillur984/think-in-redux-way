import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((prev) => prev + 10);
  };
  return (
    <>
      <h1>{count}</h1>
      <button className="bg-gray-700 mt-5" onClick={handleCount}>
        Increment
      </button>
    </>
  );
};

export default App;
