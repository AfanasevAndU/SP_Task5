import { useState } from "react";
import { useAppSelector } from "../app/hooks";

function MovieSearchPage() {
  const [count, setCount] = useState(0);

  const { movies } = useAppSelector((state) => state.movies);

  return (
    <>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <ul>{movies?.title}</ul>
      </div>
    </>
  );
}

export default MovieSearchPage;
