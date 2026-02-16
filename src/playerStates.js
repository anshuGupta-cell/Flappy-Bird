const states = {
    FLYING: 0,
    FALLING: 1
}

class States {
    constructor(state) {
        this.state = state
    }
}

export class Flying extends States {
    constructor(player) {
        super('FLYING')
        this.player = player
    }
    enter() {

    }
    handleInput(input) {
        if (input.includes('Space'))
            this.player.position.y += (-10) ;

        // if (!input.includes('Space')) {
            this.player.setState(states.FALLING)
        // } 
    }
}
export class Falling extends States {
    constructor(player) {
        super('FALLING')
        this.player = player
    }
    enter() {

    }
    handleInput(input) {
        if (input.includes('Space')) {
            this.player.setState(states.FLYING)
        }
    }
}