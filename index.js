/* const precioParcial= (costoCursos, costosPersonas)=> {
    pago = costoCursos * costosPersonas;
    return pagoParcial;
};

const precioFinal = (precioParcial1, precioParcial2, precioParcial3) =>{
    pagoFinal = precioParcial1 + precioParcial2 + precioParcial3;
    return pagoFinal;
}; */
const curso = parseInt(prompt("Elige el ID del curso que deseas tomar, solo selecciona un curso, posteriormente podrás añadir más"));
console.log(curso);

function cursoSolicitado(curso){
    if (!isNaN(curso) && (curso <= 9) && (curso >= 1)) {
        if((curso == 1) || (curso == 4) || (curso == 7)){
            let precioCurso = 450;
            return precioCurso;
        } else {
            let precioCurso = 300;
            return precioCurso;
        }
    } else {
        alert("Ingresa un ID correcto")
    }
}

cursoSolicitado();
let precioCursoSolicitado = cursoSolicitado;
alert(`El precio del curso que solicitaste es de ${precioCursoSolicitado}`);