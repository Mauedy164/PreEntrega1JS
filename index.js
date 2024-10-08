let cuenta = 0;

function cursoSolicitado(){
    const curso = parseInt(prompt("Elige el ID del curso que deseas tomar, solo selecciona un curso, posteriormente podrás añadir más"));
    console.log(curso);
    if (!isNaN(curso) && (curso <= 9) && (curso >= 1)) {
        if((curso == 1) || (curso == 4) || (curso == 7)){
            precioCurso = parseInt(450);
            cuenta += precioCurso;
        } else {
            precioCurso = parseInt(300);
            cuenta += precioCurso;
        }
        alert(`Tu cuenta al momento es de $${cuenta}`)
    } else {
        alert("Ingresa un ID correcto")
    }
}
let agregar = confirm("¿Quires añadir más cursos?");

while(agregar){
    cursoSolicitado();   
    agregar = confirm("¿Quires añadir más cursos?")
}

alert(`Tu cuenta final es de $${cuenta}`)

