//buy card

const CarrinhoIcon = document.querySelector('#card')
const Container = document.querySelector('.div-card')
CarrinhoIcon.addEventListener('click', AbrirCard)


function AbrirCard(){
  this.Container.style.display = 'flex'
}
function FecharCard(){
  this.Container.style.display = 'none'
}
