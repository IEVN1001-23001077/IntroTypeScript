export interface Producto{
    desc:string,
    precio:number
}
const telefono:Producto={
    desc:"Nokia A1",
    precio:1500
}
const tablet:Producto={
    desc:'Ipad Air',
    precio:3500
}

export function CalcularISV(productos:Producto[]):number{
    let total=0;
    for(const producto of productos){
        total+=producto.precio
    }
    return total*0.15;
}

const articulos=(telefono , tablet);
const isv=CalcularISV(articulos);
console.log("ISV: "isv);

function CalcularISV2(productos:Producto[]):[number,number]{
    let total=0,
    for(const producto of productos){
        total+=producto.precio,
    }
    return [total.total*0.15],
}
const [total,isv2]