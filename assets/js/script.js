$(document).ready(function(){
    $("a").on('click', function(e){
        if (this.hash !== "") {
            e.preventDefault()
            let hash = this.hash

            $('html, body').animate({
                crollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash
            })
        }
    });
    $("#btn").click(function(){
        alert('El mensaje fue enviado correctamente')
    });
    $("#btn").attr('title', 'Haz click para enviar tu mensaje');
})