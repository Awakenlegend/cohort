//problem 1:create an object representing type of tea with properties
let teas={
    name:"lemeon tea",
    type:"green",
    caffine:"low"
}
//problem 2:access and print the name and type of teas
console.log(teas.name)
console.log(teas.type)
//problem 3:add new proprieties to it
teas.origin="china"
console.log(teas)
//problem 4:change caffine level to medium 
teas.caffine="medium"
console.log(teas)
//problrm 5:remove the type proprities from it
delete teas.type
console.log(teas)
//check if teas has properties origin
console.log("origin" in teas )
//problem 6:use fro loop to print all properties of object
for(let key in teas){
    console.log(key + ":"+ teas[key])
}
//problem 7:create a nested object 
const nt={
    black_tea:{
        name:"black_tea",
        type :"black"
    },
    green_tea:{
        name:"green_tea",
        type:"green"

    }
}
//problem : create a copy of object
const tea_copy={
    ...nt
}
console.log(tea_copy)