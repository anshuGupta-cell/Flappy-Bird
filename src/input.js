class InputHandler {
    constructor(game) {
        this.game = game
        this.keys = [];
        
        window.addEventListener("keydown", e => {
            if ((
                e.code === 'Space' ||
                e.code === 'Enter'
            ) && this.keys.indexOf(e.code) === -1) {
                this.keys.push(e.code);
            } else if(e.code === 'KeyD') this.game.debug = !this.game.debug;
        })

        window.addEventListener("keyup", e => {
            if (
                e.code === 'Space' ||
                e.code === 'Enter'
            ) {
                this.keys.splice(this.keys.indexOf(e.code), 1);
            }
        })

        // for mobile
        window.addEventListener("touchstart", (e)=>{
            e.preventDefault()
            if (this.keys.indexOf('Space') === -1) {
                this.keys.push('Space');
            }
        })

        window.addEventListener("touchend", e => {

                this.keys.splice(this.keys.indexOf('Space'), 1);
        })


    }
}

export default InputHandler;