class Layer {
    constructor(game, width, height, speedModifier, image) {
        this.game = game,
            this.width = width
        this.height = height
        this.speedModifier = speedModifier
        this.image = image
        this.position = {
            x: 0,
            y: 0
        }
    }
    update() {
        if (this.position.x < -this.width) this.position.x = 0;
        else this.position.x -= this.game.speed * this.speedModifier
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
        ctx.drawImage(this.image, this.position.x+this.width+1, this.position.y, this.width, this.height);
    }
}

export class Background {
    constructor(game) {
        this.game = game
        this.width = 1667
        this.height = 500
        this.layer1Image = layer1 // same as -> document.getElementById('layer3')
        this.layer3Image = layer3 
        this.layer1 = new Layer(this.game, this.width, this.height, 0, this.layer1Image)
        this.layer3 = new Layer(this.game, this.width, this.height, 0.4, this.layer3Image)
        this.backgroundLayers = [this.layer1, this.layer3,]
    }
    update() {
        this.backgroundLayers.forEach((layer) => {
            layer.update()
        })
    }
    draw(ctx) {
        this.backgroundLayers.forEach((layer) => {
            layer.draw(ctx)
        })
    }
}