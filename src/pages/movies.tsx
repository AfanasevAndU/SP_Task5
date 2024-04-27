import { useState } from "react";

function MoviesPage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>

      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default MoviesPage;
