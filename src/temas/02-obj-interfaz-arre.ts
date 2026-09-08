
interface IAlumno{
    nombre:string,
    apellido:string,
    edad:number,
    email:string,
    nota?:number
}

const alumno:IAlumno={
    nombre:"Maria",
    apellido:"Lopez",
    edad:22,
    email:"lopez@gmail.com",

}
console.table(alumno)

let mascotas=['perro','gato','perico']
console.log(mascotas)
mascotas[1]="Nuevo Gato"
console.log(mascotas)
mascotas.push('leon')
console.log(mascotas)

let tem : (number|string)[]=[]
tem.push(11)
tem.push('once')
console.log(tem)