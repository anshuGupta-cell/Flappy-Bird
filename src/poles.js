class Pole {
    constructor(game) {

        this.height = 603
        this.width = 101
        this.speed = 2;
        this.position = {
            x: 400,
            y: 400,// 100 to game.height - 15 bottom
            yt: 15 - this.height
        }

        this.image = pole

    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        ctx.drawImage(this.image, this.position.x, this.position.yt, this.width, this.height)
    }
    update(input) {

     this.position.x -= this.speed;

    }

}

export default Pole;