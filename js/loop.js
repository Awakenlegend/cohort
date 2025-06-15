let arr=[1,2,3,4,5,6];
s=0;
function sum(n){
    for(let i=0;i<n.length;i++){
        s=s+n[i];

    }
    return s;
}
let a=sum(arr);
console.log(`The sum of the array is ${a}`);