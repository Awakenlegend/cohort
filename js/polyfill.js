const arr=[1,2,3,4,5]
//poly fill of  map 
//signature of map is return karta new arr \i/p:user fn
if (!Array.prototype.mymap){
    Array.prototype.mymap=function(userfn){
        const res=[];
        for(let i=0;i<this.length;i++){
            const val=userfn(this[i],i);
            res.push(val);
        }
        return res;
    };

}
const n=arr.mymap((e)=> e*2);
console.log(n);