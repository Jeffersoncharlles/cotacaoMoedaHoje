let dolarPage = document.getElementsByClassName('.dolar');

const apiRest = 'https://economia.awesomeapi.com.br/all/USD-BRL,EUR-BRL,BTC-BRL,ETH-BRL';

axios({
    method:'get',
    url:apiRest,
}).then(res=>{
    console.log(res.data)
    var data = res.data;
}).catch(err=>console.log("error apirest"));


function cotacaoDolar(){
    
}