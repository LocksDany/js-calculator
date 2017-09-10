const teclado = [
    7, 8, 9,
    4, 5, 6,
    1, 2, 3,
    0, "=", "/",
    ".", "x"
];

let botones = "";

for(var i = 0; i<teclado.length;i++){
    botones += "<button class='btn btn-default' onclick='btnNum(" + teclado[i] + ")'>" + teclado[i];
    switch(i){
        case 2:
        case 5:
        case 8:
        case 11:
            botones += "</button><br>";
            break;
        default:
            botones += "</button>";
    }
}

const btnNum = (num) => {
    if(resultados.length < 12){
        if(resultados == "0"){
            resultados = num;
            $('#resultados').html(resultados);
        } else {
            resultados += num;
            $('#resultados').html(resultados);
        }
    }
}

let resultados = "0";


$(document).ready(function(){
    $('#botones').html(botones);
    $('#resultados').html(resultados);
    $(window).keyup(function(event){
       if(Number.isInteger(parseFloat(event.key))){
           btnNum(event.key);
       }
        else if (event.keyCode == 8) {
           let a = resultados.split('');
           a.pop();
           resultados = a.join('');
           $('#resultados').html(resultados);
           
           if(resultados.length < 1){
               resultados = "0";
               $('#resultados').html(resultados);
           }
       }
        else if(event.key == "+"){
            
        }
        
    });
});