import React from "react";
import '../css/Testimonio.css'

function Testimonio({testimonio}){
    return(
        <div className="testimonio-card">
            <h3>{testimonio.nombre}</h3>
            <p>{testimonio.cargo}, {testimonio.empresa}</p>
            <p>{testimonio.testimonio}</p>
        </div>
    );
}

export default Testimonio;