var sha256Script = document.createElement('script');
sha256Script.setAttribute(
  'src',
  'https://cdnjs.cloudflare.com/ajax/libs/js-sha256/0.9.0/sha256.js'
);
document.head.appendChild(sha256Script);

window.addEventListener('load', (event) => {

  const merchantId = document.getElementById('merchantid').value;
  const productId = document.getElementById('productId').value;
  const productDescription = document.getElementById('productDescription').value;
  const amount = document.getElementById('amount').value;
  const currency = document.getElementById('currency').value;
  const responseUrl = document.getElementById('responseUrl').value;
  const transactionId = document.getElementById('transactionId')
  const dataHash = document.getElementById('hash');
  const secretKey = 'E8F6AA39B3B91733F4FECFB71A0E54DB';

  transactionId.value = `${Math.floor(100000000000000 + Math.random() * 900000)}`

  const dataToHash =
    merchantId +
    productId +
    productDescription +
    amount +
    currency +
    transactionId.value +
    responseUrl +
    secretKey;
  const hash = sha256(dataToHash)
  dataHash.value = hash
});



