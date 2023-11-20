let input= document.querySelector(".input");
let btn= document.querySelectorAll("button");

let string=""
btn.forEach(ele =>{
    ele.addEventListener("click",(e)=>{
     if(e.target.innerText == "="){
        string= String(eval(string))
        input.value= string
     }
     else if(e.target.innerText == "AC"){
        string=""
        input.value= string
     }
     else if(e.target.innerText == "DEL"){
        string= string.substring(0,string.length-1)
        input.value= string
     }
     else{
        string += e.target.innerText
        input.value= string
     }
    })
})