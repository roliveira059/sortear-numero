function generateNumber(){
    const min = Math.ceil(document.querySelector('.input-min').value)
    const max = Math.floor(document.querySelector('.input-max').value)


    if(min < max){
        const result = Math.floor(Math.random() * (max - min +1 )) + min;
        alert(result)
    }else { 
        alert("O primeiro número deve ser menor que o segundo!")
    }
}