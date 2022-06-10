import {controls} from '../../constants/controls';

export async function fight(firstFighter, secondFighter) {
    return new Promise((resolve) => {
        document.addEventListener('keydown', (e) => {
            if (e.key === "a") {
                const damage = getDamage(firstFighter, secondFighter)
                secondFighter.health = secondFighter.health - damage
                console.log(secondFighter)
            }
        })
        document.addEventListener('keydown', (e) => {
            if (e.key === "j") {
                const damage = getDamage(firstFighter,secondFighter)
                firstFighter.health = firstFighter.health - damage
                console.log(firstFighter)
            }
        })
        // resolve the promise with the winner when fight is over
    });
}
export function getBlockPower(firstFighter, secondFighter) {
    return new Promise((resolve) => {
        document.addEventListener('keydown', (e) => {
            if (e.key === "a") {
                const defense = getBlockPower(firstFighter, secondFighter)
                firstFighter.defense = firstFighter.defense - defense
                console.log(secondFighter)
            }
        })
        document.addEventListener('keydown', (e) => {
            if (e.key === "j") {
                const defense = getBlockPower(firstFighter, secondFighter)
                firstFighter.defense = firstFighter.defense - defense
                console.log(firstFighter)
            }
        })

    });
}
export function getHitPower(firstFighter, secondFighter) {
    return new Promise((resolve) => {
        document.addEventListener('keydown', (e) => {
            if (e.key === "a") {
                const defense = getBlockPower(firstFighter, secondFighter)

                firstFighter.attack = firstFighter.attack - defense
                console.log(firstFighter)
            }
        })
        document.addEventListener('keydown', (e) => {
            if (e.key === "j") {
                const defense = getBlockPower(firstFighter, secondFighter)
                firstFighter.attack = firstFighter.attack - defense
                console.log(firstFighter)
            }
        })
    });
}
fighter.attack
 export function getDamage(attacker, defender) {
    return new Promise((resolve) => {
        document.addEventListener('keydown', (e) => {
            if (e.key === "l") {
    const damage = getHitPower(attacker) - getBlockPower(defender)
    return damage > 0 ? damage : 0


}
        }

// return hit power
    // return block power

