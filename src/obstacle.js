class Obstacle {
    constructor(game) {
        this.markedForDeletion = false
    }


    update() {
        this.position.x -= this.speedX
        this.position.y += this.speedY

        if (this.position.x + this.width < 0) {
            this.markedForDeletion = true
        }
    }
    draw(ctx) {
        if (this.game.debug) {
            ctx.strokeRect(this.position.x, this.position.ytop + this.height, this.width, this.gap)
        }
        ctx.drawImage(this.image, this.position.x, this.position.ybottom, this.width, this.height)
        ctx.drawImage(this.imageRotated, this.position.x, this.position.ytop, this.width, this.height)

    }


}

export class Pole extends Obstacle {
    constructor(game) {
        super(game)
        this.game = game
        this.width = 101
        this.height = 603
        this.passed = false
        this.gap = 180
        this.ybottom = Math.random() * 280+ this.gap
        this.position = {
            x: this.game.width,
            ybottom: this.ybottom,
            ytop: this.ybottom - this.height - this.gap,
            y: Math.random() * this.game.height * 0.5
        }
        this.speedX = 3;
        this.speedY = 0;
        this.image = pole
        this.imageRotated = poleRotated
    }

    update() {
        super.update();
    }

}