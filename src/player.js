class Player {

    // this.p = document.getElementById("player")

    constructor(game) {
        this.game = game;
        this.width = 90;
        this.height = 70;
        this.position = {
            x: 0,
             y: game.height / 2 - this.height / 2
        }

        this.gravity = 4.5
        this.jump = -15    ;
        this.speed = 0;
        this.maxSpeed = 10;

        this.image = player;  // same as -> document.getElementById("player")
    }

    update(input) {

        if (input.includes('Space'))
            this.position.y += this.jump;
        // else if (input.includes('Enter'))         }

        if (this.position.x <= this.game.width / 6) {
            this.position.x++
        }

        if (this.position.y  <= this.game.height) {  
            this.position.y += this.gravity
        }

        if (this.position.y > this.game.height || this.position.y < 0 - this.height) {
            // console.log("dead");

        }


    }

    draw(ctx) {


        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }



}

export default Player;