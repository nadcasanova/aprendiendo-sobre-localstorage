document.addEventListener("DOMContentLoaded",()=>{
    var dato = window.localStorage.getItem('dato')
    document.getElementById("data").innerText = dato
})