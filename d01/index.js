// DESAFIO 1
function CriarParagrafos() {
    let paragrafo = document.getElementById("paragrafoPrincipal")
   paragrafo.innerHTML = ""

    for (let i = 1; i <= 10; i++) {
    
        if (i % 3 == 0 ) {
    
            paragrafo.innerHTML += `<p class ="paragrafoDivisivel3">Paragrafo ${i}</p>`
        }else{
    
            paragrafo.innerHTML += `<p>Paragrafo ${i}</p>`
        }      
    } 
}