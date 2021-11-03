

class Consultorio {
    constructor(nombreClinica, paciente) {
        this.nombreClinica = nombreClinica;
        this.paciente = paciente || [];
    }

    set setPaciente(paciente) {
        this.paciente.push(paciente);
    }

    get getPaciente() {
        return this.paciente;
    }

    //metodo:
    buscarPaciente(nombre) {
        return this.paciente.find((item) => item.nombre.toLowerCase() === nombre.toLowerCase());
    }
};


class Paciente {
    constructor(nombre, edad, rut, diagnostico) {
        this.nombre = nombre;
        this.edad = edad;
        this.rut = rut;
        this.diagnostico = diagnostico;
    }

}


const pedro = new Paciente('Pedro', '32', '14.571.187-k', 'colon irritable');
const juan = new Paciente('Juan', '70', '8.010.907-8', 'diabetes tipo 1');
const diego = new Paciente('Diego', '24', '21.203.650-8', 'Cancer de piel');

const consultorioA = new Consultorio('ConsultorioA');

consultorioA.setPaciente = pedro;
consultorioA.setPaciente = juan;
consultorioA.setPaciente = diego;

//console.log(consultorioA.getPaciente);
console.log(consultorioA.buscarPaciente('pedro'));
console.log(consultorioA.buscarPaciente('JUAn'));
