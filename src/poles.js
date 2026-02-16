class Pole {
    constructor(game, x, ybottom) {

        this.height = 603
        this.width = 101
        this.speed = game.speed;
        this.gap = 200;

        this.position = {
            x: x,
            ybottom: ybottom,   // 140 to 480
            ytop: ybottom - this.height - this.gap,
        }

        this.image = pole
        this.imageRotated = poleRotated

    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.ybottom, this.width, this.height)
        ctx.drawImage(this.imageRotated, this.position.x, this.position.ytop, this.width, this.height)
    }
    update(input) {

        this.position.x -= this.speed;
    }

}

export default Pole;