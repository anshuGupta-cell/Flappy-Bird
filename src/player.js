import { Falling, Flying } from "./playerStates";


class Player {
    constructor(game) {
        this.game = game;
        this.width = 90;
        this.height = 70;
        this.position = {
            x: 0,
            y: game.height / 2 - this.height / 2
        }
        this.gravity = 4
        this.jump = -15;
        this.vy = 0;
        this.weight = 1;
        this.speed = 3;
        this.maxSpeed = 10;

        this.image = Array.from(document.querySelectorAll(".player"));
        this.fps = 6;
        this.frameInterval = 1000 / this.fps;
        this.frameTimer = 0;
        this.i = 0; // same as -> document.getElementById("player")
        // console.log(this.image);


        this.states = [new Flying(this), new Falling(this)]
        this.currentState = this.states[0]
        this.currentState.enter()
    }

    update(input, deltaTime) {
        this.currentState.handleInput(input)

        if (input.includes('Space'))
            this.position.y += this.jump;


        // else if (input.includes('Enter'))

        if (this.position.x <= this.game.width / 3) {
            this.position.x += this.speed
        }

        if (this.position.y <= this.game.height) {
            this.position.y += this.gravity
        }

        if (this.position.y > this.game.height || this.position.y < 0 - this.height) {
            // console.log("dead");

        }

        // Frame animation
        if (this.frameTimer > this.frameInterval) {
            this.frameTimer = 0;
            this.i++;
            if (this.i === 6) {
                this.i = 0;
            }
        } else {
            this.frameTimer += deltaTime
        }


    }

    draw(ctx) {
        ctx.drawImage(this.image[this.i], this.position.x, this.position.y, this.width, this.height);


    }
    setState(state) {
        this.currentState = this.states[state]
        this.currentState.enter()
    }


}

export default Player;