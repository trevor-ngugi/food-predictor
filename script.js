let btnRandom=document.querySelector('button')
let result=document.querySelector('h1')

let food=['steers','urban','java','artcaffe']

function getRandomNumber(min,max){
    let step1=max-min+1;
    let step2=Math.random()*step1
    let result=Math.floor(step2)+min
    return result
}

btnRandom.addEventListener('click',()=>{
    let index=getRandomNumber(0,food.length-1);
    result.innerText=food[index]
})
