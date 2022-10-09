function addUser(){
    player1=document.getElementById("player1input").value;
    player2=document.getElementById("player2input").value;
    localStorage.setItem("player1name",player1);
    localStorage.setItem("player2name",player2);
    Window.location="game_page.html";}