const rucula ={name:"rucula",
id: 1,
ingredientes: ["masa","tomate","queso","rucula"],
precio: 500
}
const napolitana ={name:"napolitana",
id: 2,
ingredientes: ["masa","tomate","queso"],
precio: 450
}
const calabresa ={name:"calabresa",
id: 3,
ingredientes: ["masa","tomate","queso","calabresa"],
precio: 550
}
const roquefort ={name:"roquefort",
id: 4,
ingredientes: ["masa","tomate","queso","roquefort"],
precio: 600
}
const cuatroqueso ={name:"Cuatro Quesos",
id: 5,
ingredientes: ["masa","tomate","queso","roquefort","parmesano","gouda"],
precio: 650
}
const mozarella ={name:"Cuatro Quesos",
id: 6,
ingredientes: ["masa","tomate","mozarella"],
precio: 400
}
let pizzaArrayObj =[rucula,napolitana,calabresa,roquefort,cuatroqueso,mozarella]

let listA ="";
let a = pizzaArrayObj.filter((a)=>{
    return a.id %2 == 1
})
a.map((a)=>{listA += " " +  a.name})
console.log("A)" + listA)

let listB = ""
let b = pizzaArrayObj.filter((b)=>{
    return b.precio < 600
})
b.map((b)=>{listB += " " +  b.name})

console.log("B)" + listB)

let listC = ""
let c = pizzaArrayObj.map((c)=>{
    listC += " " +  c.name
})
console.log("C)"+ listC)

let listD = ""
let D = pizzaArrayObj.map((D)=>{
    listD += " " +  D.name + ":$" + D.precio 
})
console.log("D y la E)"+ listD)