export default function initFetchBitcoin() {
  fetch('https://www.blockchain.com/pt/ticker')
  .then((response) => response.json())
  .then(bitcoin => {
    const btcPreco = document.querySelector('.btc-preco');
    btcPreco.innerText = (5000 / bitcoin.BRL.buy).toFixed(4);
    console.log();
  }).catch(erro => {
    console.log(Error(erro));
  }) 
}
