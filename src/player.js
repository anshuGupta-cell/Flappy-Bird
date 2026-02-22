import { Falling, Flying, Hit } from "./playerStates.js";


class Player {
    constructor(game) {
        this.game = game;
        this.width = 90;
        this.height = 70;
        this.position = {
            x: 0,
            y: game.height / 2 - this.height / 2
        }
        this.gravity = 6
        this.jump = -13;
        this.vy = 0;
        this.weight = 1;
        this.speed = game.speed;
        this.maxSpeed = 10;

        this.image = Array.from(document.querySelectorAll(".player"));
        this.fps = 6;
        this.frameInterval = 1000 / this.fps;
        this.frameTimer = 0;
        this.i = 0; // same as -> document.getElementById("player")
        // console.log(this.image);


        this.states = [new Flying(this), new Falling(this), new Hit(this.game)]
        this.currentState = this.states[0]
        this.currentState.enter()
    }

    update(input, deltaTime) {
        this.currentState.handleInput(input)
        this.checkCollision()
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
        if (this.game.debug) {
            ctx.strokeRect(this.position.x +20, this.position.y + 10, this.width - 40, this.height - 20)
        }
        ctx.drawImage(this.image[this.i], this.position.x, this.position.y, this.width, this.height);


    }
    setState(state) {
        this.currentState = this.states[state]
        console.log(this.currentState);

        this.currentState.enter()
    }

    checkCollision() {
        // fall death OR Out of the sky
        if (this.game.height < this.position.y ||
            this.position.y + this.height < 0
        ) {
            this.game.gameOver = true
            this.setState(2)
        }
        console.log(this.game.height);

        this.game.obstacles.forEach(obstacle => {
            

            // pole collision death
            if (
                obstacle.position.x < this.position.x + this.width - 20 &&
                obstacle.position.x + obstacle.width > this.position.x + 20
            ) {
                if (
                    obstacle.position.ybottom < this.position.y + this.height - 10 ||
                    obstacle.position.ytop + obstacle.height > this.position.y + 10
                ) {

                    this.setState(2)
                    this.game.gameOver = true
                    console.log(this.game.gameOver)
                    console.log("death collision");
                }
    
            }

            // ⭐ Score only once when obstacle passes player
            if (!obstacle.passed && obstacle.position.x + obstacle.width < this.position.x) {
                if (this.currentState == this.states[0] || this.currentState == this.states[1]) {
                    this.game.score += 1;
                    obstacle.passed = true;
                    console.log(this.game.score);
                }
            }

        });
    }
}

export default Player;