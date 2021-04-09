
var database;
var form, game, player;
var gameState = 0;
var playerCount = 0;
var allplayers;

function setup() {
    createCanvas(500, 500);


    database = firebase.database()
    game = new Game()
    game.getState()
    game.startGame()

}

function draw() {
    background("white");

    if (playerCount === 4)
    {
        game.updateState(1);
    }

    if (gameState === 1)
    {
      game.play();
    }

}

