export default function initFetchBitcoin(url, target) {
  fetch(url)
    .then((response) => response.json())
    .then(bitcoin => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (5000 / bitcoin.BRL.buy).toFixed(4);
      console.log();
    }).catch(erro => {
      console.log(Error(erro));
    }) 
}
