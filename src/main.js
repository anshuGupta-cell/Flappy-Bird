import { Background } from "./background";
import InputHandler from "./input";
import { Pole } from "./obstacle";
import Player from "./player";

window.addEventListener("load", () => {

    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext("2d");
    canvas.height = 500;
    canvas.width = 500;

    class Game {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.speed = 3;
            this.debug = true
            this.player = new Player(this);
            this.input = new InputHandler(this)
            this.background = new Background(this)
            this.obstacles = []  // enemy is obstacle
            this.obstacleTimer = 0
            this.obstacleInterval = 2000
        }

        update(deltaTime) {
            this.player.update(this.input.keys, deltaTime);
            this.background.update()

            //handle Obstacle/enemy
            if (this.obstacleTimer > this.obstacleInterval) {
                this.addEnemy()
                this.obstacleTimer = 0;
            } else {
                this.obstacleTimer += deltaTime
            }
            this.obstacles.forEach((obstacle) => {
                obstacle.update(deltaTime);
                if (obstacle.markedForDeletion){
                    this.obstacles.splice(this.obstacles.indexOf(obstacle), 1)
                }
            })

        }
        draw(ctx) {
            this.background.draw(ctx)
            this.player.draw(ctx);

            this.obstacles.forEach((obstacle) => {
                obstacle.draw(ctx);
            })
        }

        addEnemy() {
            this.obstacles.push(new Pole(this))

        }
        removeObstacle() {

        }

    }

    const game = new Game(canvas.width, canvas.height)

    const fps = 60;
    const interval = 1000 / fps;
    let lastTime = 0;

    function animate(timeStamp) {

        if (timeStamp - lastTime >= interval) {
            const deltaTime = timeStamp - lastTime;
            lastTime = timeStamp
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // setInterval(()=>{
            game.draw(ctx);
            game.update(deltaTime)
            // }, 10)

        }
        requestAnimationFrame(animate);

    }

    animate();

})