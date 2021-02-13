let dolarPage = document.querySelector('.dolar span');

// Url api
const apiRest = 'https://economia.awesomeapi.com.br/all/USD-BRL,EUR-BRL,BTC-BRL,ETH-BRL';

//functions de captor Moedas
function captDolar(restor){
    console.log(restor.USD)
    let valor = parseFloat(restor.USD.ask);
    let n = valor.toFixed(2);
    dolarPage.innerHTML = `$: ${n}`;

    console.log(n);
}

function quantoDaEsseValor(numeroMulti=1,numeroMoeda=1){

}

function captEuror(restor){
    console.log(restor.EUR)
}
function captBitc(restor){
    console.log(restor.BTC)
}
function captETH(restor){
    console.log(restor.ETH)
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
