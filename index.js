let cuenta = 0;
let personas =0;

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
            const personas = parseInt(prompt("¿Cuántas personas tomarán el curso? (Máximo 30 personas por curso)"));
            console.log(personas)
            if (!isNaN(personas) && (personas <= 30) && (personas >= 1)) {
                console.log(personas)
                console.log(cuenta)
                cuenta = (personas*cuenta);
                alert(`Tu cuenta al momento es de $${cuenta}`);
                if (personas >=30) {
                    alert("El número máximo de personas por grupo es de 30");
                } 
            } else {
                alert("Ingresa un número válido de personas");
            }


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

