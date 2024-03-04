arr = [[0,0,0],[0,0,0],[0,0,0]];
player = 1 ;// player 1 is X and player 2 is O
is_start = 0;
scr  = [0,0] ; 
winner = 0 ;
round  = 0 ;


function popup_on(){
    document.getElementById("s2").classList.add("score");
}
function popup_off(){
    document.getElementById("s2").classList.remove("score");
    document.getElementById("s2").innerHTML = ` `;
}

function btn_on(){
    document.getElementById("0").classList.add("hidde");
    document.getElementById("1").classList.add("hidde");
    document.getElementById("2").classList.add("hidde");
    document.getElementById("3").classList.add("hidde");
    document.getElementById("4").classList.add("hidde");
    document.getElementById("5").classList.add("hidde");
    document.getElementById("6").classList.add("hidde");
    document.getElementById("7").classList.add("hidde");
    document.getElementById("8").classList.add("hidde");

}
function btn_off(){
    document.getElementById("0").classList.remove("hidde");
    document.getElementById("1").classList.remove("hidde");
    document.getElementById("2").classList.remove("hidde");
    document.getElementById("3").classList.remove("hidde");
    document.getElementById("4").classList.remove("hidde");
    document.getElementById("5").classList.remove("hidde");
    document.getElementById("6").classList.remove("hidde");
    document.getElementById("7").classList.remove("hidde");
    document.getElementById("8").classList.remove("hidde");
}

function hidde(id){
    document.getElementById("settings").classList.add("hidde");
}

function play(x,y,bnt){

    console.log("play function",x,y,bnt,arr);
    if(winner ==0) {
        round++;

        if(arr[x][y] == 0){
            arr[x][y] = player;
            if(player == 1){
                document.getElementById(bnt).value = "X";
                player = 2;
            }else{
                document.getElementById(bnt).value = "O"
                player = 1;
            }
        }
        document.getElementById(bnt).disabled = true;

        if (round >= 5){
            checkWinner();


            if (winner==1 && round <9){
                popup_on();
                document.getElementById("s2").innerHTML = `<div id="p1"></div>
                <div>X Win</div>
                <div id="p2"></div> `;
            }
            else if (winner == 2 && round<9){
                popup_on();
                document.getElementById("s2").innerHTML = `<div id="p1"></div>
                <div>O Win</div>
                <div id="p2"></div> `;
            }
            else if (round >= 9){
                popup_on();
                document.getElementById("s2").innerHTML = `<div id="p1"></div>
                <div>Draw</div>
                <div id="p2"></div> `;

            }
            score()
        }
    }
    else{
        res()
    }
    console.log("play function",arr[x][y],player);

}
function checkWinner(){
    console.log("checkWinner function");
    
    if(arr[0][0] == arr[0][1] && arr[0][1] == arr[0][2] && arr[0][0] != 0){
        winner = arr[0][0];
    }
    if(arr[1][0] == arr[1][1] && arr[1][1] == arr[1][2] && arr[1][0] != 0){
        winner = arr[1][0];
    }
    if(arr[2][0] == arr[2][1] && arr[2][1] == arr[2][2] && arr[2][0] != 0){
        winner = arr[2][0];
    }  

    if(arr[0][0] == arr[1][0] && arr[1][0] == arr[2][0] && arr[0][0] != 0){
        winner = arr[0][0];
    }
    if(arr[0][1] == arr[1][1] && arr[1][1] == arr[2][1] && arr[0][1] != 0){
        winner = arr[0][1];
    }
    if(arr[0][2] == arr[1][2] && arr[1][2] == arr[2][2] && arr[0][2] != 0){
        winner = arr[0][2];
    }


    if(arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2] && arr[0][0] != 0){
        winner = arr[0][0];
    }
    if (arr[0][2] == arr[1][1] && arr[1][1] == arr[2][0] && arr[0][2] != 0){
        winner = arr[0][2];
    }
}
function score(){
    if (winner==1){
        scr[0]++;
    }
    else if (winner == 2){
        scr[1]++;
           }
    document.getElementById("p1").innerHTML = `X| ${scr[0]}`;
    document.getElementById("p2").innerHTML = `O| ${scr[1]}`;
    console.log(scr);

}

function res(){
    popup_off();
    console.log(arr);
    cnt = 0;
    winner=0;
    round = 0;
    arr = [[0,0,0],[0,0,0],[0,0,0]];
    console.log(arr);
    document.getElementById("0").value = "";
    for(cnt ; cnt < 9;cnt ++){
        console.log(cnt);
        document.getElementById(cnt).value = "";
        document.getElementById(`${cnt}`).disabled = false;
    }
}

