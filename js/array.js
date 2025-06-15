// // create diff teaser for array methods
 const arr=['green tea', 'black tea', 'oolong tea', 'white tea', 'herbal tea'];
console.log(arr);
// //problem 1: add chamomile tea to the end of the array
// arr.push('chamomile tea');
// console.log(arr);
// //problem 2:remove oolong tea from the array
// //arr.pop('oolong tea');
// arr.splice(2,1);
// console.log(arr);
// //problem 3: filter the array to only include teas that are caffeinated
// //arr.filter('caffeinated');
// teas=arr.filter(tea=>tea!=='herbal tea' && tea!='chamomile tea');
// console.log(teas);
// //problem 4: sort the array in alphabetical order
// arr.sort();
// console.log(arr);
// //problem 5:use a for loop to iterate through the array and print each tea
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
//problem 6: use a count if tea is caffeinated
let c=0;
for(let i=0;i<arr.length;i++){
    if(arr[i] !== 'herbal tea' && arr[i] !== 'chamomile tea'){
        c++;
        
    }
}
console.log(c);
//problem 7: create for loop for uppercase names of teas
up_teas=arr.map(arr=>arr.toUpperCase());
console.log(up_teas);
//problem 8:use teas with most characters
let ml="";
for(let i=0;i<arr.length;i++){
    if(arr[i].length>ml.length){
        ml=arr[i];
    }
}
//problem 9: for loop to reverse the array
let ra=[];
for (let i=arr.length -1;i>=0;i--){
    ra.push(arr[i]);
}
console.log(ra);