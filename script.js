const inputbox=document.getElementById('input-box')
const listcontainer = document.getElementById("list-container");

function addtask()
{
if(inputbox.value==='')
{
    alert("You must add Something")
}
else{
    let li=document.createElement("li")
    li.innerHTML=inputbox.value
    listcontainer.appendChild(li)
}
}