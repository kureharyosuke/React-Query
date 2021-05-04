import React, { useState } from "react";

function App() {
  const [page, setPage] = useState("planets");

  return (
    <div className="App">
      <h1>Star Wars Info</h1>
      <div className="content">
      </div>
    </div>
  );
}

export default App;

//https://fettblog.eu/typescript-react/hooks/