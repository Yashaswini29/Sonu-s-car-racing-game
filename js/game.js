class Game{
    constructor(){

    }
    getState(){
        var gamestateref = database.ref('gameState')
        gamestateref.on("value",(data)=>{
            gameState = data.val()

        })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }

    start(){
        if(gameState===0){
            player= new Player()
            player.getCount();
            form = new Form()
            form.display()
        }
    }

    play(){
        form.hide()
        textSize(30)
        text("game Started",120,100)
    }
}