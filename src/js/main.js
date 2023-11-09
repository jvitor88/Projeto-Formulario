const inputList = document.querySelectorAll('.input') 
const warnList = document.querySelectorAll('.warning')
const loading = document.querySelector('.loading')
const send = document.querySelector('.send')
const button = document.querySelector('.button')

button.addEventListener("click", () => {
    inputList.forEach((input, index) => {
        if(input.value === ''){
            input.classList.add('void')
            warnList[index].classList.add('void')          
        }else{
            input.classList.remove('void')
            warnList[index].classList.remove('void')
            input.classList.add('complete')  
        }
    })
    send.classList.add('sended')
    loading.classList.add('waiting')
    setInterval(() => {
        send.classList.remove('sended')
        loading.classList.remove('waiting')
    }, 3000);

})