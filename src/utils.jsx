// src/utils.js
export function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

export function fiveHeads() {
    return new Promise((resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;

        const attemptFlip = () => {
            attempts++;
            let result = tossCoin();
            console.log(`${result} fue volteado`);
            if (result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }

            if (headsCount === 5) {
                resolve(`Tomó ${attempts} intenta voltear cinco  "heads"`);
            } else if (attempts >= 100) {
                reject("Los intentos superaron las 100 veces sin lanzar cinco heads");
            } else {
                setTimeout(attemptFlip, 0);
            }
        };

        attemptFlip(); 
    });
}
