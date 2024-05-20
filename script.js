function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')  
    var data = new Date()
    var hora = data.getHours()
    var minute = data.getMinutes()
    var hora = 2
    msg.innerHTML = `Agora são ${hora}:${minute} horas`
    if(hora >= 0 && hora < 12){
        //BOM DIA!!
        img.src = "/foto/fotomanha1.png"
        img.style.width = "350px"
        img.style.height= "250px"
        document.body.style.background = "#e2cd9f"
    } else if(hora >= 12 && hora < 18){
        //BOA TARDE!!
        img.src = "/foto/fototarde1.png"
        img.style.width = "350px"
        img.style.height= "250px"
        document.body.style.background = "#b9846f"
    } else {
        //BOA NOITE!!
        img.src = "/foto/fotonoite1.png"
        img.style.width = "250px"
        img.style.height= "350px"
        document.body.style.background = "#515154"


    }
}
