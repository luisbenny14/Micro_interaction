var text = document.querySelector('.Efecto');

var letras = text.innerHTML;
text.innerHTML = letras.split('').map(letra => letra === ' ' ? `<span>&nbsp</span>` : `<span>${letra}</span>`).join('');

var spans = document.querySelectorAll('span');
spans.forEach(span => {
    span.addEventListener('mouseover', function(){
        TweenLite.to(span,1,{top:-15})
    })
});

var spans = document.querySelectorAll('span');
spans.forEach(span => {
    span.addEventListener('mouseleave', function(){
        TweenLite.to(span,1,{top:15})
    })
});