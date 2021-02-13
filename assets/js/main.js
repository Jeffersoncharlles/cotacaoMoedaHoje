let dolarPage = document.querySelector('.dolar span');
let eurorPage = document.querySelector('.euro span');
let bitPage = document.querySelector('.bitcoin span');
let ethPage = document.querySelector('.eth span');

// Url api
const apiRest = 'https://economia.awesomeapi.com.br/all/USD-BRL,EUR-BRL,BTC-BRL,ETH-BRL';
const apiRest2 = 'https://economia.awesomeapi.com.br/json/daily/USD-BRL/15';

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

function quantoDaEsseValor(){
    

    
}

function graficUSD(USD){
    
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
     console.log(restor.BTC)
    //Bitcon
    let valor = parseFloat(restor.BTC.ask);
    let n = valor.toFixed(2);
    bitPage.innerHTML = `Cotação Bitcoin  R$: ${n}`;
    console.log(n);
}
function captETH(restor){
     console.log(restor.ETH)

    let dolar = parseFloat(restor.USD.ask)
    let valor = parseFloat(restor.ETH.ask);

    let result = dolar * valor ;
    console.log(result);

    let n = result.toFixed(2);
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


// axios (ajax ) grafic
axios({
    method:'get',
    url:apiRest2,
}).then(res=>{
    graficUSD(res.data);
    
}).catch(err=>console.log("error apirest"));