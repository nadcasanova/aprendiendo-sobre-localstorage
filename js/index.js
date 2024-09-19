document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("buttonText").addEventListener("click", ()=>{
        var text = document.getElementById("inputText").value
        window.localStorage.setItem('dato',text)
    })
})