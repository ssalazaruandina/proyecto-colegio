export interface Alumno{
    usuarioA:string,
    contraseniaA:string,
    nombreA:string,
    apellidoPA:string,
    apellidoMA:string,
    sexoA:string
}
export function buscar(lista: Alumno[],user:string,password:string):number{
    let cont:number = 0;
    while(cont < lista.length){
        if(lista[cont].usuarioA == user && lista[cont].contraseniaA == password){
            return cont;
        }
        cont++;
    }
    return -1;
}

export interface Docente{
    codDocenteD:string,
    nombreD:string,
    apellidoPD:string,
    apellidoMD:string,
    nivelCargoEstudiantes: string
}
export interface Asistencia{
    fechaAsistencia: string,
    alumnoAsistencia:Alumno,
    aulaAsistecia:Aula,
    estado: string,
    modificacionesA?:number|string
}
export interface Aula{
    codAula:string,
    numeroAula:number
}
export interface DetalleEstudiante{
    niveldeEstudioD:string,
    gradoD:string,
    alumnoD:Alumno
}
export interface RegistroAsistencia{
    codRA :string,
    nroSesionRA: number,
    fechaRA: string,
    horaInicio: string,
    horaFin: string,
    Unidad: string,
    docenteRA: Docente
}
//a
