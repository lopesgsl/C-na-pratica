//faz os itens da lista mudar de cor quando clica

var itens = document.querySelectorAll('.itens-sidebar')

function selectLink(){
    itens.forEach((item)=>
    item.classList.remove('ativo')  
    )
    this.classList.add('ativo')
}
itens.forEach((item)=>
    item.addEventListener('click', selectLink)
)


//expandir menu

var btnExt = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-sidebar')

btnExt.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')

})

//expandir topicos

var btntopicos = document.querySelector('#topicos')
var subtopicos = document.querySelector('.sub')

btntopicos.addEventListener('click', function(){
    subtopicos.classList.toggle('abrir')

})

//o video só aparece se clicar
var btntutorial = document.querySelector('.tutoriais')
var abrirvideo = document.querySelector('.container')


btntutorial.addEventListener('click', function(){
    abrirvideo.classList.add('aparecervideo')


})




//trocar de videos
function trocarVideo(videoId) {
    document.getElementById('videoFrame').src = `https://www.youtube.com/embed/${videoId}`;
}

