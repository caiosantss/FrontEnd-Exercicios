function ExibirTabuada() {
    let numeroTabuada = document.getElementById("inputTabuada").value
    let DivResultado = document.getElementById("ResultadoTabuada")
    DivResultado.innerHTML = ""

    if (numeroTabuada >=1 && numeroTabuada <= 10) {
            
         for (let i = 0; i <= 10; i++) {
        
        
            DivResultado.innerHTML += `<div>${numeroTabuada} x ${i} = ${numeroTabuada * i}</div><br>`

        }   
    } else{
        DivResultado.innerHTML = `<div style ="color:red; font-weight: bold;"> VALOR INVALIDO </div>`
    }    
}