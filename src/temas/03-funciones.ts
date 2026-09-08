let x=8
let y=2

function sumar(x:number,y:number,z:number=5):number{
    let a=6
    let b=7
    let res=a+b
console.log('la suma es '+res)
return x+y+z

}
let resultado = sumar(x,y)
console.log(resultado)

interface Mascotas{
    nombre :string,
    edad:number,
    raza:string,
    sexo?:string,
    vacunado:boolean,
    mostrar:()=>void
}
const nuevaMascotas:Mascotas={
    nombre:'confleis',
    edad:5,
    raza:'pastor guelga',
    vacunado:true,
    mostrar(){
        console.log(`La edad de ${this.nombre} es ${this.edad}`)
    }

}
function mostrarMascota(mascota:Mascotas,x:number):void{
    mascota.edad+=5
    console.log(mascota)
    console.log(mascota.mostrar())
}

mostrarMascota(nuevaMascotas,3)