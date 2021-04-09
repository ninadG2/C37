class Game {
    constructor() { }

    getState() {
        var dbref = database.ref("gameState");
        dbref.on("value", function (data) {
            gameState = data.val()
        })
    }
    updateState(state) {
        database.ref("/").update({ gameState: state })
    }

    startGame() {
        if (gameState === 0) {
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }

   play() {
    form.hideForm()
    textSize(30);
    text("Start the Game", 120, 100)
    Player.getPlayerInfo()
    
    if(allplayers !== undefined)
    {
        var displayPosition = 150;
        for (var plr in allplayers)
        {
           
           if(plr==="player"+player.index)
           {
               fill("red")
           }
           else{
               fill("black")
           }
           text(allplayers[plr].Name + " : " + allplayers[plr].Distance, 120, displayPosition )
           displayPosition = displayPosition +40;

        }
        if(keyIsDown(UP_ARROW) && player.index !== null)
        {
            player.distance += 50;
            player.update();
        }
    }

   }

}