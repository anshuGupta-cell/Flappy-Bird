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
            this.pole = new Pole(this)
        }

        update() {
            this.player.update(this.input.keys);
            this.pole.update(this.input.keys);
        }
        draw(ctx) {
            this.player.draw(ctx);
            this.pole.draw(ctx)
        }
    }

    const game = new Game(canvas.width, canvas.height)
    console.log(game);

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        game.draw(ctx);
        game.update()

        requestAnimationFrame(animate);
    }

    animate();

})