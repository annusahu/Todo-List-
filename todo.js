const input=document.getElementById("input");
const button=document.getElementById("button");
const contain=document.getElementById("contain");
button.addEventListener("click",function(event){
    event.preventDefault();
    if(input.value==='')
        {
            alert("please write something");
        }
        else{
            let li=document.createElement("li");
            li.innerHTML=input.value;
            
            contain.appendChild(li);
            let span=document.createElement("span");
            span.innerHTML="\u00d7";
            li.appendChild(span);
        }
        input.value="";
        saveData()
});

contain.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false) ;

function saveData(){
    localStorage.setItem("Data",contain.innerHTML)
}
function show()
{
    contain.innerHTML=localStorage.getItem("Data");
}
show();