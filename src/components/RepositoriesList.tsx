import React, { useState } from "react";
import { useDispatch } from "react-redux";

import useSelector from "../hooks/useSelector";
import { actionCreators } from "../state";

function RepositoriesList() {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const { data, loading, err } = useSelector((state) => state.repositories);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    dispatch(actionCreators.searchRepositories(term));
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTerm(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="term"
          id="term"
          value={term}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      {loading && <p>Loading...</p>}
      {err && <p>{err}</p>}
      {data && (
        <pre>
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      )}
    </div>
  );
}

export default RepositoriesList;
