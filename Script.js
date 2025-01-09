const qrgenerator= document.getElementById('qrgenerator');
const inputbox = document.getElementById('inputbox');
const qrimg = document.getElementById('qrimg');
const qrbtn = document.getElementById('qrbtn');

// console.log(inputbox, qrbtn,qrimg);

qrbtn.addEventListener('click',  ()=> {
 const inputvalue = inputbox.value;
 console.log(inputvalue);

 if(inputvalue === ''){
    alert('put valid link for code')
    return;
 }

 else{
  qrimg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`

 }
})