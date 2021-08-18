function getPin(){
    //console.log('Generating');
    const pin=Math.round(Math.random()*10000);
    const pinString=pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        console.log('Get 3 digit & calling again',pin);
        return getPin();
    }
}
function generatePin(){
    const pin=getPin();
    console.log(pin);
    document.getElementById('display-pin').value=pin;
}

document.getElementById('key-pad').addEventListener('click',function(event){
    console.log('any key clicked');
    console.log(event.target);
    console.log(event.target.innerText);
    const number=event.target.innerText;
    const calcInput= document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number=='C'){
            calcInput.value='';
        }
    }
    else{

       
    const previousNumber=calcInput.value;
    const newNumber=previousNumber+number;
    calcInput.value=newNumber;
    }
    

})
function verifyPin(){
    //console.log('verify');
    const pin=document.getElementById('display-pin').value;
    const typeNumbers=document.getElementById('typed-numbers').value;

    const successMessage=document.getElementById('notify-success');
    const failError=document.getElementById('notify-fail');

    if(pin==typeNumbers){
       
        successMessage.style.display='block';
        failError.style.display='none';
    }
    else{
        successMessage.style.display='none';
        failError.style.display='block';
    }
}