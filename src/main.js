import InputHandler from "./input";
import Player from "./player";
import Pole from "./poles";

window.addEventListener("load", () => {

    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext("2d");
    canvas.height = 500;
    canvas.width = 500;

    class Game {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.player = new Player(this);
            this.input = new InputHandler()
            this.pole = new Pole(this, 600, 480)
        }

        update(deltaTime) {
            this.player.update(this.input.keys, deltaTime);
            this.pole.update(this.input.keys);
        }
        draw(ctx) {
            this.player.draw(ctx);
            this.pole.draw(ctx)
        }

        drawPole() {
            this.pole.position
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