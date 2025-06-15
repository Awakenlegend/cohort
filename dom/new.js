function black(color){
    document.body.style.backgroundColor = color;
}
// const m = document.getElementById('dark');
// m.addEventListener('click',() => {
//         black(black);
//     })//
const t=document.getElementById('toggle');
t.addEventListener('click',() => {
    const cc=document.body.style.backgroundColor;
    if(! cc || cc=='white'){
        black('black');
        t.innerText='Light mode';
    }else{
        black('white');
        t.innerText='Dark mode'
    }

});