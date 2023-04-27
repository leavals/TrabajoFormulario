function generarCarta(event) {
        event.preventDefault();
        var rut= document.getElementById("rut").value;
        var nombre = document.getElementById("nombre").value;
        var ApellidoPaterno = document.getElementById("ApellidoPaterno").value;
        var ApellidoMaterno = document.getElementById("ApellidoMaterno").value;
        var edad = document.getElementById("edad").value;
        var fono = document.getElementById("fono").value;
        var motivacion = document.getElementById("motivacion").value;
    
        var carta = "Estimado mi nombre es "+nombre+ApellidoPaterno+ApellidoMaterno+",\n\nMe dirijo a usted en relación a la postulacion de empleo trabajo ambiental. Me encantaria postularme para dicho trabajo y considero que mi tengo muy buena salud tengo la edad de"+edad+" y tengo muchas ganas de descontaminar y ayudar al medio ambiente.\n\nMi motivación para aplicar a este trabajo es"+motivacion+". \n\nAtentamente,\n  nombre: "+nombre+" telefono: "+fono+" rut:"+rut;
        document.getElementById("carta").value = carta;
    }