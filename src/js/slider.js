const imagensSlider = document.getElementsByClassName('imagem')
const imgs = document.querySelectorAll('#imagens-slider img')
let imagemAberta = document.querySelector('.aberto')
let contador = 0
const setaAvancar = document.getElementById('avancar')
const setaVoltar = document.getElementById('voltar')  

// setaAvancar.addEventListener('click', () => {   
//     contador++
   
//     mostraOuEsconderSlider()
//     mostrarOuDesativarSetas()
// })

// setaVoltar.addEventListener('click', () => {
//     contador--
   
//     mostraOuEsconderSlider()
//     mostrarOuDesativarSetas()
// })


// function mostraOuEsconderSlider() {
//     const imagemAtual = imagensSlider[contador]

//     imagemAberta.classList.remove('aberto')
//     imagemAberta = imagemAtual

//     imagemAtual.classList.add('aberto')
// }

// function mostrarOuDesativarSetas(){
//     if(contador <= 0){
//         setaVoltar.classList.add('desabilitar-seta')
//     }else{
//         setaVoltar.classList.remove('desabilitar-seta')
//     }
  
//     if(contador >= imagensSlider.length -1){
//         setaAvancar.classList.add('desabilitar-seta')
//     }else{
//         setaAvancar.classList.remove('desabilitar-seta')
//     }
// }

const img = document.getElementById('imagens-slider')


function carrosel(){
    contador++

    if(contador > imgs.length - 1){
        contador = 0
    }

    img.style.transform = `translateX(${-contador * 1440}px)`
    img.style.transform = `translateX(${-contador * 1440}px)`
}

setInterval(carrosel, 4000)



