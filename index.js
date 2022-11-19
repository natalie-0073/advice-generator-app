const adviceNum=document.querySelector("#advice-number");
const adviceText=document.querySelector("#advice-text");
const btn=document.querySelector("#advice-button");

btn.addEventListener('click', handleApi);

function displayAdvice(response){
    console.log(response.data.slip.id);
adviceNum.innerHTML=response.data.slip.id;
adviceText.innerHTML=response.data.slip.advice;
}

function handleApi(){
    const url="https://api.adviceslip.com/advice";
    axios.get(url).then(displayAdvice);
}
