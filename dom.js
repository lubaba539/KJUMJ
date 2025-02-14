const toggleButton= document.getElementById('toggleButton');
const content = document.getElementById('content');
const changeButton = document.getElementById('changeButton');
const text= document.getElementById('text');


toggleButton.addEventListener('click' ,()=>{
    if(content.classList.contains('hidden')){
        content.classList.remove('hidden');
        toggleButton.textContent ='hide Content';
    }else{
        content.classList.add('hidden');
        content.classList.remove('hidden');
        toggleButton.textContent ='show Content';

    }

});

changeButton.addEventListener('click' ,()=>{
    text.textContent ='KJUMJ LOVES U';
    text.classList.toggle('changed');
})