arr = [[0,0,0],[0,0,0],[0,0,0]]
player = 1 // player 1 is X and player 2 is O

function play(x,y,bnt){
    // arr = [[0,0,0][0,0,0][0,0,0]]
    console.log("play function",x,y,bnt,arr)
    if(arr[x][y] == 0){
        arr[x][y] = player
        if(player == 1){
            document.getElementById(bnt).value = "X"
            player = 2
        }else{
            document.getElementById(bnt).value = "O"
            player = 1
        }
    }
    document.getElementById(bnt).disabled = true

    console.log("play function",arr[x][y],player)
}