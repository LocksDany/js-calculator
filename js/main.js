const teclado = [
    'C', 'C', '/', 'x',
    '7', '8', '9', '+',
    '4', '5', '6', '-',
    '1', '2', '3', '=',
    '0', '.'
];

let botones = "";
let resultados = "0";
let resultadoAnterior = 0;

const giveFunc = (input) => {
    let html = "";
    switch(input){
        default:
            html = "btnNum(\"" + input + "\")";
            return html;
            break;
        case 'C':
            html = "delAll()' id='delAll";
            return html;
            break;
        case '+':
            html = "sumNum()' id='sum";
            return html;
            break;
        case '=':
            html = "equalsNum()' id='equals";
            return html;
            break;
    }
}

for(var i = 0; i<teclado.length;i++){
    botones += "<button class='btn btn-default' onclick='"+ giveFunc(teclado[i]) +"'>" + teclado[i] + "</button>";
}

const btnNum = (input) => {
    if(resultados.length < 12){
        console.log(input);
        
        if(resultados == "0"){
            resultados = input;
            $('#resultados').html(resultados);
        } else {
            resultados += input;
            $('#resultados').html(resultados);
        }
    }
}

const sumNum = () => {
    if(resultadoAnterior > 0){
        equalsNum();
        resultadoAnterior = parseInt(resultados);
    } else if (resultados != "0"){
        resultadoAnterior = parseInt(resultados);
        resultados = "0";
        $('#resultados').html(resultados);
    }
}

const equalsNum = () => {
    if(resultadoAnterior > 0){
        resultados = resultadoAnterior + parseInt(resultados);
        resultados += "";
        $('#resultados').html(resultados);
        resultadoAnterior = 0;
    }
}

const del = () => {
    let a = resultados.split('');
    a.pop();
    resultados = a.join('');
    $('#resultados').html(resultados);
    if(resultados.length < 1){
        resultados = "0";
        $('#resultados').html(resultados);
    }
}

const delAll = () => {
    resultados = "0";
    resultadoAnterior = 0;
    $('#resultados').html(resultados);
}

$(document).ready(function(){
    $('#botones').html(botones);
    $('#resultados').html(resultados);
    $(window).keyup(function(event){
       if(Number.isInteger(parseFloat(event.key))){
           btnNum(event.key);
       }
        
        else if (event.keyCode == 8) {
           del();
       }
        switch(event.key){
            case "+":
                sumNum();
                break;
        }
        
    });
});