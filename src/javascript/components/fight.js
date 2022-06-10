import { controls } from '../../constants/controls';

export async function fight(firstFighter, secondFighter) {
    return new Promise((resolve) => {
        const keysPressed = {}
        console.log(firstFighter, secondFighter)
        document.addEventListener("keydown", (e) => {
            keysPressed[e.code] = true;
            if (keysPressed[e.code] === keysPressed[controls.PlayerOneAttack] && !keysPressed[controls.PlayerOneBlock]) {
                let damage
                if (keysPressed[controls.PlayerTwoBlock]){
                    damage = getDamage(firstFighter, secondFighter)
                } else {
                    damage = getHitPower(firstFighter)
                }

                secondFighter.health =  secondFighter.health -damage;
                console.log("secondFighter.hels", secondFighter.health)
            }

        })
        document.addEventListener("keydown", (e) => {
            keysPressed[e.code] = true;
            if (keysPressed[e.code] === keysPressed[controls.PlayerTwoAttack] &&  !keysPressed[controls.PlayerTwoBlock]) {
                let damage
                if (keysPressed[controls.PlayerOneBlock]){
                    damage = getDamage(secondFighter, firstFighter)
                } else {
                    damage = getHitPower(secondFighter)
                }
                firstFighter.health = firstFighter.health - damage;
                console.log("firstFighter.hels", firstFighter.health)
            }
        })


        document.addEventListener('keyup', (e) => {
            delete keysPressed[e.code];
        });

        if (firstFighter.health <= 0) {
            return resolve(secondFighter)
        }

        if (secondFighter.health <= 0) {
            return resolve(firstFighter)
        }
        // resolve the promise with the winner when fight is over
    });
}

export function getDamage(attacker, defender) {
    const damage = getHitPower(attacker) - getBlockPower(defender)
    return damage > 0 ? damage : 0
}

export function getHitPower(fighter) {
    return fighter.attack
    // return hit power
}

export function getBlockPower(fighter) {
    return fighter.defense
    // return block power
}


