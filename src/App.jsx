import NavBar from "./components/NavBar";
import Form from "./components/Form";
import List from "./components/List";
import { useState } from "react";
import { data } from "./data";

const App = () => {
  const [collaborators, setCollaborators] = useState(data);
  const [filter, setFilter] = useState("")

  return(
  <div className="container">
    <NavBar title={"Buscador de Colaboradores"} collaborators={collaborators}  setFilter={setFilter} />
    <Form collaborators={collaborators} setCollaborators={setCollaborators} />
    <hr />
    <List title={"Listado de colaboradores"} collaborators={collaborators} filter={filter} />
  </div>
  );
};

export default App;
