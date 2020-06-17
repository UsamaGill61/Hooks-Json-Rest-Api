import React, { useState } from "react";
import ResourceList from "./Components/ResourceList";
import ResourceUser from "./Components/ResourceUser";

const App = () => {
  const [resource, setResource] = useState("posts");

  return (
    <div>
      <ResourceUser/>
      <div className="container py-2 text-center">
        <button className="btn btn-danger "
         onClick={() => setResource("posts")}>
          Posts
        </button>
        <button
          className="btn btn-primary"
          onClick={() => setResource("todos")}
        >
          Todos
        </button>
      </div>
      <div className="container text-center">
        <ResourceList resource={resource} />
      </div>
    </div>
  );
};

export default App;
