import "./list.css";

const List = ({title, collaborators, filter}) => {
  
return (
  <div className="list">
    
    <h1 className="title">{title}</h1>
    <ul>
      {collaborators.filter((coll) =>
            coll.nombre.toLowerCase().includes(filter.toLowerCase())
          ).map((coll) => (
        <li key={coll.id}>
          {coll.nombre} - {coll.correo}
        </li>
      ))}
    </ul>
  </div>
  );
};

export default List;
