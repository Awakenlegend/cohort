const ip=document.getElementById('ip');
const btn=document.getElementById('b');
const i=document.getElementById('items');
btn.addEventListener('click',()=>{
    const val=ip.value;
    const li=document.createElement('li');
    li.innerText=val;
    const del=document.createElement('button')
    del.innerText='x'
    li.appendChild(del)
    del.addEventListener('click',()=>{
        li.remove();
    })
    i.appendChild(li);
    ip.value='';
})