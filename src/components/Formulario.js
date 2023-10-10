import React, { useState } from "react";

function Form ( {onGuardarTestimonio} ){
  const [nombre, setNombre] = useState('');
  const [cargo, setCargo] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [testimonio, setTestimonio] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    const nuevoTestimonio = {nombre, cargo, empresa, testimonio}
    onGuardarTestimonio(nuevoTestimonio); 
    setNombre('');
    setCargo('');
    setEmpresa('');
    setTestimonio('');
  };

  return(
    <div>
      <h2>Registro de testimonios</h2>
        <form onSubmit={handleSubmit}>
          <label>Nombre: <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}/></label><br />
          <label>Cargo: <input type="text" value={cargo} onChange={(e) => setCargo(e.target.value)}/></label><br />
          <label>Empresa: <input type="text" value={empresa} onChange={(e) => setEmpresa(e.target.value)}/></label><br />
          <label>Testimonio: <input type="text" value={testimonio} onChange={(e) => setTestimonio(e.target.value)}/></label><br />
          <button type="submit">Enviar</button>
        </form>
    </div>
  );
}

export default Form;