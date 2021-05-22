import React from "react";

import RepositoriesList from "./components/RepositoriesList";

function App() {
  return (
    <main className="container mt-5">
      <section className="row">
        <div className="col col-12">
          <h1>hello</h1>
        </div>
        <div className="col col-12">
          <RepositoriesList />
        </div>
      </section>
    </main>
  );
}

export default App;
