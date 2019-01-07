let body = document.querySelector('body');
let header = document.querySelector('.header');
let img = document.querySelector('.header img');
let ancoras = document.querySelectorAll('nav a');
let menu = document.querySelector('.burguer');
let barrinhas = document.querySelectorAll('.barrinha');
let nav = document.querySelector('nav');
let h1 = document.querySelector('.header h1');

let up = document.querySelector('.up');
let seta = document.querySelector('.up i');

// Função de onclick para aparecer os links de navegação ao clicar no menu
menu.onclick = () => {
    for(let barrinha of barrinhas){
        barrinha.classList.toggle('barrinha-click');
    }
    nav.classList.toggle('nav-click');
    header.classList.toggle('header-click');
}

// Ativa a animação do menu ao passar o mouse por cima
menu.onmouseover = () => {
    barrinhas[1].style.width = '35px';
    barrinhas[2].style.width = '35px';
    for(let barrinha of barrinhas){
        barrinha.style.backgroundColor = '#E75C1A';
    }
    
}

// Desativa a animação do menu ao passar o mouse por cima
menu.onmouseout = () => {
    barrinhas[1].style.width = '30px';
    barrinhas[2].style.width = '25px';
    for(let barrinha of barrinhas){
        barrinha.style.backgroundColor = 'white';
        barrinha.style.boxShadow = 'none'
    }
}

// Animação do header ao descer a página
body.onscroll = () => {
    if(scrollY > 5){
        header.classList.add('header-scroll');
        h1.style.display = 'flex';
        if(header.classList.length > 2){
            ancoras[0].style.marginTop = '40px';
        }
        else{
            ancoras[0].style.marginTop = '0px';
        }
    }
    else{
        header.classList.remove('header-scroll');
        h1.style.display = 'none';
        ancoras[0].style.marginTop = '0px';
    
    }
    // Ao descer até descer a página até derterminado local, o botão "Voltar ao topo" aparece
    if(scrollY > 120){ 
        up.style.transform = 'translateY(0)';
    }
    else{
        up.style.transform = 'translateY(200px)';
    }
}

// Dar animação a seta de "UP"
up.onmouseover = () => {
    seta.style.animation = 'ping .4s ease-in infinite alternate';
}

up.onmouseout = () => {
    seta.style.animation = 'none';
}
 
// Volta para o topo da página
up.onclick = () => {
    // location.href = '#first-section' 
     window.scrollTo(0, 0);
    
}

