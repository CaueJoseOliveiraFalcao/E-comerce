//buy card
let contador_de_fechamento = false
const Carrinho = document.querySelector('#card')
const CarrinhoDiv = document.querySelector('.div-card')

function Abrir() {
  if (contador_de_fechamento == false) {
    contador_de_fechamento = true
    CarrinhoDiv.style.display = 'flex'
  }
  else {
    contador_de_fechamento = false
    CarrinhoDiv.style.display = 'none'
  }
}


const Carros = {
  Ferrari: {
    'img': './assets/img/adrian-n-6So_bn4FW_w-unsplash.jpg',
    'Nome': 'Ferrari',
    'Qunt': 0,
    'link': '',
    'id': 1,
    'preco': 100,
    'preco_variavel': 0
  },
  Lamborghini: {
    'img': './assets/img/alex_rainer-1_lxISUE3F4-unsplash.jpg',
    'Nome': 'Lamborghini',
    'Qunt': 0,
    'link': '',
    'id': 2,
    'preco': 100,
    'preco_variavel': 0
  },
  Porshe: {
    'img': './assets/img/porshe.jpg',
    'Nome': 'Porshe',
    'Qunt': 0,
    'link': '',
    'id': 3,
    'preco': 100,
    'preco_variavel': 0
  },
  Supra: {
    'img': './assets/img/supra.jpg',
    'Nome': 'Supra',
    'Qunt': 0,
    'link': '',
    'id': 4,
    'preco': 100,
    'preco_variavel': 0
  },
  Camaro: {
    'img': './assets/img/camaro.jpg',
    'Nome': 'Camaro',
    'Qunt': 0,
    'link': '',
    'id': 5,
    'preco': 100,
    'preco_variavel': 0
  },
  Skyline: {
    'img': './assets/img/skyline.jpg',
    'Nome': 'Skyline R3',
    'Qunt': 0,
    'link': '',
    'id': 6,
    'preco': 100,
    'preco_variavel': 0
  },
  Supra_Tunado: {
    'img': './assets/img/supratunado.jpg',
    'Nome': 'Porshe',
    'Qunt': 0,
    'link': '',
    'id': 7,
    'preco': 100,
    'preco_variavel': 0
  },
  Mustang: {
    'img': './assets/img/mustang.jpg',
    'Nome': 'Mustang GT',
    'Qunt': 0,
    'link': '',
    'id': 8,
    'preco': 100,
    'preco_variavel': 0
  },
  
}


let img = document.querySelector('#imagem_carro')
let link = document.querySelector('#link_page')
let x_buttom = document.querySelector('#botao_limpar')
let nome_preco_quantidade = document.querySelector('#nome_preco_quantidade')
let status_ativado = false
let prop = ''

function Requeste(id_carro) {
  for (i in Carros) {
    if (id_carro == Carros[i].id) {
      Carros[i].img.src
      Carros[i].Qunt += 1
      Carros[i].preco_variavel += Carros[i].preco
      img.src = Carros[i].img
      link.style.display = 'block'
      x_buttom.style.display = 'flex'
      nome_preco_quantidade.innerHTML = `
      Nome = ${Carros[i].Nome} <br> Preco = ${Carros[i].preco_variavel} Qunt = ${Carros[i].Qunt}`
    }

  }

}

function Limpar() {
  for (i in Carros) {
    Carros[i].Qunt = 0
    Carros[i].preco_variavel = 0
    
    nome_preco_quantidade.innerHTML = `Carrinho Vazio`
    img.src = ''
    link.style.display = 'none'
    x_buttom.style.display = 'none'
  }
}


const Div_menu_moble = document.querySelector('#menu-mobile')

let HambuguerButtom = document.querySelector('.hamburguer-mobile')
let XbuttonMenu = document.querySelector('#Xbuttom_menu')

function MenuMobile(){
  Div_menu_moble.style.margin = 0
}
function fecharMenuMobile(){
  Div_menu_moble.style.margin = '100vh'
  CarrinhoDiv.style.display = 'none'
}

HambuguerButtom.addEventListener('click' , MenuMobile)
XbuttonMenu.addEventListener('click' , fecharMenuMobile)