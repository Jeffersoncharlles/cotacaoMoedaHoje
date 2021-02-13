let dolarPage = document.querySelector('.dolar span');
let eurorPage = document.querySelector('.euro span');
let bitPage = document.querySelector('.bitcoin span');
let ethPage = document.querySelector('.eth span');
let numeroMulti = '1';

// Url api
const apiRest = 'https://economia.awesomeapi.com.br/all/USD-BRL,EUR-BRL,BTC-BRL,ETH-BRL';

//functions de captor Moedas
function captDolar(restor,numeroMulti){
    // console.log(restor.USD)

    //dolar
    let valor = parseFloat(restor.USD.ask);
    let n = valor.toFixed(2);

    // real
    let real =  parseFloat(numeroMulti)
    let rn = real.toFixed();

    // print
    dolarPage.innerHTML = `Cotação dolar  R$: ${n}`;
}

function quantoDaEsseValor(numeroMulti=1,numeroMoeda=1){
    let result = numeroMulti * numeroMoeda ;

    return result;
}

function captEuror(restor){
    // console.log(restor.EUR)
    //Euro
    let valor = parseFloat(restor.EUR.ask);
    let n = valor.toFixed(2);

    eurorPage.innerHTML = `Cotação Euro  R$: ${n}`;

    console.log(n);
}
function captBitc(restor){
    // console.log(restor.BTC)
    //Bitcon
    let valor = parseFloat(restor.BTC.ask);
    let n = valor.toFixed(2);
    bitPage.innerHTML = `Cotação Bitcoin  R$: ${n}`;
    console.log(n);
}
function captETH(restor){
    // console.log(restor.ETH)

    let valor = parseFloat(restor.ETH.ask);
    let n = valor.toFixed(2);

    ethPage.innerHTML = `Cotação do Ethereum R$: ${n}`;
    console.log(n);
}

//axios (ajax) do get
axios({
    method:'get',
    url:apiRest,
}).then(res=>{
    var restor = res.data;
    captDolar(restor);
    captEuror(restor);
    captBitc(restor);
    captETH(restor);
}).catch(err=>console.log("error apirest"));
