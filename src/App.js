import React, { useState } from "react";
import Testimonio from "./components/Testimonio.js"
import Form from "./components/Formulario.js";

function App() {
  const [testimonios, setTestimonios] = useState([]);

  const guardarTestimonio = (nuevoTestimonio) => {
    let nuevoTestimonios = [...testimonios, nuevoTestimonio]
    
    if (nuevoTestimonios.length > 3){
      nuevoTestimonios = nuevoTestimonios.slice(1);
    }

    setTestimonios(nuevoTestimonios);
  }
  return (
    <div className="App">
      <div className='main-container'>
        <Form onGuardarTestimonio={guardarTestimonio}/>
          <div className="testimonios-container">
            {testimonios.slice().reverse().map((testimonio, index) => (
              <Testimonio key={index} testimonio={testimonio}/>
            ))}
          </div>
      </div>
    </div>
  );
}

export default App;
