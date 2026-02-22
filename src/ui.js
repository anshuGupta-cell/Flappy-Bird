export class UI {
    constructor(game) {
        this.game = game
        this.fontSize = 30
        this.fontFamily = 'Helvetica'
    }
    draw(ctx) {
        ctx.save()
        ctx.shadowOffsetX = 2
        ctx.shadowOffsetY = 2
        ctx.shadowColor = 'white'
        ctx.shadowBlur = 0

        ctx.font = this.fontSize + 'px ' + this.fontFamily
        ctx.textAlign = 'left'
        ctx.fillStyle = this.game.fontColor
        ctx.fillText('Score: ' + this.game.score, 20, 50)

        if (this.game.gameOver) {
            ctx.textAlign = 'center'
            ctx.font = this.fontSize * 2 + 'px ' + this.fontFamily

            if (this.game.score === 0) {

                ctx.fillText('Boo-Boo', this.game.width * 0.5, this.game.height * 0.5 - 20)
                ctx.font = this.fontSize * 0.7 + 'px ' + this.fontFamily
                ctx.fillText('Who is the biggest piece of dog shit? YOU!!!', this.game.width * 0.5, this.game.height * 0.5 + 20)
            }
            if (this.game.score > 50) {

                ctx.fillText('Boo-yah', this.game.width * 0.5, this.game.height * 0.5 - 20)
                ctx.font = this.fontSize * 0.7 + 'px ' + this.fontFamily
                ctx.fillText('What are creatures afraid of night afraid of? YOU!!!', this.game.width * 0.5, this.game.height * 0.5 + 20)
            }

        }
        ctx.restore()
    }
}