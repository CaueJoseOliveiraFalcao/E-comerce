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
    'Qunt': 1,
    'link': '',
    'id': 1,
    'preco' : 100
  },
  Lamborghini: {
    'img': './assets/img/alex_rainer-1_lxISUE3F4-unsplash.jpg',
    'Nome': 'Lamborghini',
    'Qunt': 1,
    'link': '',
    'id': 2,
    'preco' : 100
  },
  Porshe: {
    'img': './assets/img/porshe.jpg',
    'Nome': 'Porshe',
    'Qunt': 1,
    'link': '',
    'id': 3,
    'preco' : 100
  },
  Supra: {
    'img': './assets/img/supra.jpg',
    'Nome': 'Supra',
    'Qunt': 1,
    'link': '',
    'id': 4,
    'preco' : 100
  }
}


let img = document.querySelector('#imagem_carro')
let link = document.querySelector('#link_page')
let nome_preco_quantidade = document.querySelector('#nome_preco_quantidade')
let status_ativado = false
let prop = ''
let preco_atual = ''


function addCard(id_resquest) {
  
  for (prop in Carros) {

    if (Carros[prop].id == id_resquest) {
      if (status_ativado == true) {
        Carros[prop].Qunt += 1
        preco_atual *= Carros[prop].Qunt
      }
      else {
        status_ativado = true
        img.src = Carros[prop].img
        nome_preco_quantidade.innerHTML = `
        ${Carros[prop].Nome} = ${Carros[prop].preco}$ Qnt = ${Carros[prop].Qunt}`

      }
    }
  }
}

