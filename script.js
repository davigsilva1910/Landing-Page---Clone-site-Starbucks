document.addEventListener('DOMContentLoaded', function() {
    
    const imagens = [
        document.querySelector('.img1 img'),
        document.querySelector('.img2 img'),
        document.querySelector('.img3 img')
    ];
    let index = 0;
    
    function mostrarImagem() {
        imagens.forEach(img => img.style.transition = 'opacity 0.5s ease'); // Adiciona a transição a todas as imagens
        
        imagens.forEach(img => img.style.opacity = 0); // Esconde todas as imagens
        
        imagens[index].style.opacity = 1; // Mostra a imagem ativa
        index = (index + 1) % imagens.length;
    }
    
    setInterval(mostrarImagem, 7000); // Altera a imagem a cada 3 segundos (3000 milissegundos)
   
    //Animação titulo sessão 1
    var tituloSection1 = document.getElementById('titulo-section-1');
    tituloSection1.style.visibility = 'hidden';

    function efeitoTituloS1() {
        var barraY = window.scrollY;
        if(barraY >= 55 && barraY < 460){
            tituloSection1.style.visibility = 'visible';
            tituloSection1.style.transform = 'translateX(' + barraY * -1.75 + 'px)';
        } else if(barraY >= 460){
            tituloSection1.style.transform = 'translateX(' + 460 * -1.75 + 'px)';
        } else if(barraY < 55){
            tituloSection1.style.visibility = 'hidden';
        }
        console.log(barraY);
    }

    var tituloSection2 = document.getElementById('titulo-section-2');
    tituloSection2.style.visibility = 'hidden';

    function efeitoTituloS2() {
        var barraY = window.scrollY;
    
        if (barraY >= 460 && barraY < 919) {
            tituloSection2.style.visibility = 'visible';
            var valorX = (barraY - 460) * -2; // Ajuste o fator multiplicativo conforme necessário
            tituloSection2.style.transform = 'translateX(' + valorX + 'px)';
        } else if (barraY < 460) {
            tituloSection2.style.visibility = 'hidden';
        }
    }
    
    var tituloSection3 = document.getElementById('titulo-section-3');
    tituloSection3.style.visibility = 'hidden';

    function efeitoTituloS3() {
        var barraY = window.scrollY;

        if(barraY >= 919 && barraY < 1397) {
            tituloSection3.style.visibility = 'visible';
            var valorX = (barraY - 919) * -2;
            tituloSection3.style.transform = 'translateX(' + valorX + 'px)';
        } else if (barraY < 919){
            tituloSection3.style.visibility = 'hidden';
        }
    }

    window.addEventListener('scroll', function() {
        efeitoTituloS1();
        efeitoTituloS2();
        efeitoTituloS3();
    });


    //ScrollReveal
    const sr = ScrollReveal({
        reset: true
    });

    sr.reveal('.section1', {
        origin: 'bottom',
        distance: '50px',
        duration: 2000,
        scale: 0.8,
        opacity: 0,
        delay: 30
    });

    sr.reveal('.section2', {
        origin: 'right',
        distance: '300px',
        duration: 2000,
        opacity: 0,
        delay: 30
    });

    sr.reveal('.section3', {
        rotate: {x: 0, y: 100, z: 0},
        duration: 2000,
        opacity: 0,
        delay: 30
    });

    sr.reveal('.section-4, .section-5', {
        delay: 200,
        duration: 1000,
        distance: '30px',
        origin: 'right',
        opacity: 0,
        easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
    });

    sr.reveal('.footer-starkbucks', {
        origin: 'bottom',
        distance: '50px',
        duration: 1500,
        delay: 200,
        opacity: 0,
        scale: 0.5,
        easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
    });
})
