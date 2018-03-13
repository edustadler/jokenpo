
var counter = 1;
var player1;
var player2;

function reply_click(clicked_id)
{
    if(counter == 1){
        document.getElementById('p1').innerHTML = null;
        document.getElementById('p2').innerHTML = null;
        //document.getElementById('p1').innerHTML = clicked_id;
        player1 = clicked_id;
        counter++;
    }else{
        document.getElementById('p2').innerHTML = clicked_id;
        document.getElementById('p1').innerHTML = player1;
        var p1 = document.getElementById('p1').innerText;
        var p2 = document.getElementById('p2').innerText;
        
        if(p1 == 'Pedra' && p2 == 'Papel')
        {
            document.getElementById('result').innerHTML = 'Papel venceu!';
        }
        if(p1 == 'Pedra' && p2 == 'Tesoura')
        {
            document.getElementById('result').innerHTML = 'Pedra Venceu!';
        }
        if(p1 == 'Papel' && p2 == 'Pedra')
        {
            document.getElementById('result').innerHTML = 'Papel Venceu!';
        }
        if(p1 == 'Papel' && p2 == 'Tesoura')
        {
            document.getElementById('result').innerHTML = 'Tesoura Venceu!';
        }
        if(p1 == 'Tesoura' && p2 == 'Pedra')
        {
            document.getElementById('result').innerHTML = 'Pedra Venceu!';
        }
        if(p1 == 'Tesoura' && p2 == 'Papel')
        {
            document.getElementById('result').innerHTML = 'Tesoura Venceu!';
        }
        if(p1 == 'Papel' && p2 == 'Papel')
        {
            document.getElementById('result').innerHTML = 'Empate!';
        }
        if(p1 == 'Pedra' && p2 == 'Pedra')
        {
            document.getElementById('result').innerHTML = 'Empate!';
        }
        if(p1 == 'Tesoura' && p2 == 'Tesoura')
        {
            document.getElementById('result').innerHTML = 'Empate!';
        }


        counter = 1;
    }
}