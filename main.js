const btn =document.querySelectorAll("button");
const span =document.querySelectorAll("span");
const count =[0, 0, 0, 0];
for(let i=0;i<span.length;i++){
    btn[i].onclick = () =>{
        count[i]++;
        span[i].textContent=count[i];
    };
}