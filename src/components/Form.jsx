import { useState } from "react";
import "./form.css";

const Form = ({ collaborators, setCollaborators }) => {
  const [newCollaborate, setNewCollaborate] = useState("");
  const [email, setEmail] = useState("");

  const addFormulary = (e) => {
    e.preventDefault();
    newCollaborate === "" && email === ""
      ? alert("Ingrese al menos un caracter")
      : setCollaborators([
          ...collaborators,
          {
            id: collaborators.length + 1,
            nombre: newCollaborate,
            correo: email,
          },
        ]);
    setNewCollaborate("");
    setEmail("");
  };

  const captureCollaborator = (e) => {
    setNewCollaborate(e.target.value);
  };

  const captureEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="form">
      <form  onSubmit={addFormulary}>
        <div className="fieldColl">
        <label htmlFor="callaborator">Nombre del colaborador</label>
        <input
          id="callaborator"
          type="text"
          name="callaborator"
          value={newCollaborate}
          onChange={captureCollaborator}
          placeholder="Ingresa el nombre del colaborador"
        />
      </div>
      <div className="fieldEmail">
        <label htmlFor="email">Correo del colaborador</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={captureEmail}
          placeholder="Ingresa correo del colaborador"
        />
        </div>
        <button className="btn">Agregar</button>
      </form>
    </div>
  );
};

export default Form;
