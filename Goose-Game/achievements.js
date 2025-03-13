/*ACHIEVEMENTS*/
const colleggtor = [
    {
        number: 1,
        requirement: 'Collect 10 Eggs',
        reward: '5 Eggs',
        eggplus: 5,
        button: `<button id="colleggtor1" disabled>Collect</button>`,
        achieved: false
    },
    {
        number: 2,
        requirement: 'Collect 50 Eggs',
        reward: '25 Eggs',
        eggplus: 25,
        button: `<button id="colleggtor2" disabled>Collect</button>`,
        achieved: false
    },
    {
        number: 3,
        requirement: 'Collect 100 Eggs',
        reward: '50 Eggs',
        eggplus: 50,
        button: `<button id="colleggtor3" disabled>Collect</button>`,
        achieved: false
    },
    {
        number: 4,
        requirement: 'Collect 500 Eggs',
        reward: '250 Eggs',
        eggplus: 250,
        button: `<button id="colleggtor4" disabled>Collect</button>`,
        achieved: false
    },
    {
        number: 5,
        requirement: 'Collect 1.000 Eggs',
        reward: '500 Eggs',
        eggplus: 500,
        button: `<button id="colleggtor5" disabled>Collect</button>`,
        achieved: false
    }
];

const goslevelator = [
    {
        number: 1,
        requirement: 'Hatch 10 Eggs',
        reward: '100 Warmth',
        warmthplus: 100,
        button: `<button id="goslevelator1" disabled>Collect</button>`,
        achieved: false
    },
    {
        number: 2,
        requirement: 'Hatch 50 Eggs',
        reward: '500 Warmth',
        warmthplus: 500,
        button: `<button id="goslevelator2" disabled>Collect</button>`,
        achieved: false
    },
    {
        number: 3,
        requirement: 'Hatch 100 Eggs',
        reward: '1.000 Warmth',
        warmthplus: 1000,
        button: `<button id="goslevelator3" disabled>Collect</button>`,
        achieved: false
    },
    {
        number: 4,
        requirement: 'Hatch 500 Eggs',
        reward: '5.000 Warmth',
        warmthplus: 5000,
        button: `<button id="goslevelator4" disabled>Collect</button>`,
        achieved: false
    },
    {
        number: 5,
        requirement: 'Hatch 1.000 Eggs',
        reward: '10.000 Warmth',
        warmthplus: 10000,
        button: `<button id="goslevelator5" disabled>Collect</button>`,
        achieved: false
    }
];

const horseSizedGoose = [
    {
        number: 1,
        requirement: 'Reach goose level 5',
        reward: '5 passive corn generation',
        button: `<button id="horse-sized-goose1" disabled>Collect</button>`,
        achieved: false
    },
    {
        number: 2,
        requirement: 'Reach goose level 10',
        reward: '10 passive corn generation',
        button: `<button id="horse-sized-goose2" disabled>Collect</button>`,
        achieved: false
    },
    {
        number: 3,
        requirement: 'Reach goose level 50',
        reward: 'Unlock bundle of corn at the store',
        button: `<button id="horse-sized-goose3" disabled>Collect</button>`,
        achieved: false
    },
    {
        number: 4,
        requirement: 'Reach goose level 100',
        reward: '50 passive corn generation',
        button: `<button id="horse-sized-goose4" disabled>Collect</button>`,
        achieved: false
    },
    {
        number: 5,
        requirement: 'Reach goose level 500',
        reward: 'Unlock bag of corn at the store',
        button: `<button id="horse-sized-goose5" disabled>Collect</button>`,
        achieved: false
    }
];

const gooseSizedHorses = [
    {
        number: 1,
        requirement: 'Own 10 geese',
        reward: '2% chance your geese will lay an egg at the farm',
        button: `<button id="goose-sized-horse1" disabled>Collect</button>`,
        achieved: false
    },
    {
        number: 2,
        requirement: 'Own 50 geese',
        reward: '3% chance your geese will lay an egg at the farm',
        button: `<button id="goose-sized-horse2" disabled>Collect</button>`,
        achieved: false
    },
    {
        number: 3,
        requirement: 'Own 100 geese',
        reward: '4% chance your geese will lay an egg at the farm',
        button: `<button id="goose-sized-horse3" disabled>Collect</button>`,
        achieved: false
    },
    {
        number: 4,
        requirement: 'Own 500 geese',
        reward: '5% chance your geese will lay an egg at the farm',
        button: `<button id="goose-sized-horse4" disabled>Collect</button>`,
        achieved: false
    },
    {
        number: 5,
        requirement: 'Own 1.000 geese',
        reward: '10% chance your geese will lay an egg at the farm',
        button: `<button id="goose-sized-horse5" disabled>Collect</button>`,
        achieved: false
    }
];

const goosemaster = [
    {
        number: 1,
        requirement: 'Get level 1 of the other achievements',
        reward: 'Balloons are now buyable at the store!',
        button: `<button id="goosemaster1" disabled>Collect</button>`,
        achieved: false
    },
    {
        number: 2,
        requirement: 'Get level 2 of the other achievements',
        reward: 'Your eggs now wear a fun party hat!',
        button: `<button id="goosemaster2" disabled>Collect</button>`,
        achieved: false
    },
    {
        number: 3,
        requirement: 'Get level 3 of the other achievements',
        reward: 'Your goslings now wear a fun party hat!',
        button: `<button id="goosemaster3" disabled>Collect</button>`,
        achieved: false
    },
    {
        number: 4,
        requirement: 'Get level 4 of the other achievements',
        reward: 'Your geese now wear a fun party hat!',
        button: `<button id="goosemaster4" disabled>Collect</button>`,
        achieved: false
    },
    {
        number: 5,
        requirement: 'Get level 5 of the other achievements',
        reward: 'Birthday cake is now buyable at the store!',
        button: `<button id="goosemaster5" disabled>Collect</button>`,
        achieved: false
    }
];

let eggAmtCounter = 0;
let eggHatCounter = 0;
let passiveCorn = 0;

const enableButtons = () => {
    enableColleggtor();
    enableGoslevelator();
    enableHorseSizedGoose();
    enableGooseSizedHorses();
    enableGoosemaster();
}

const enableGoosemaster = () => {
    const goosemaster1 = document.getElementById("goosemaster1");
    const goosemaster2 = document.getElementById("goosemaster2");
    const goosemaster3 = document.getElementById("goosemaster3");
    const goosemaster4 = document.getElementById("goosemaster4");
    const goosemaster5 = document.getElementById("goosemaster5");

    if (goosemaster[0].achieved === true) {
        goosemaster1.innerHTML = `Collected`;
    }
    if (goosemaster[1].achieved === true) {
        goosemaster2.innerHTML = `Collected`;
    }
    if (goosemaster[2].achieved === true) {
        goosemaster3.innerHTML = `Collected`;
    }
    if (goosemaster[3].achieved === true) {
        goosemaster4.innerHTML = `Collected`;
    }
    if (goosemaster[4].achieved === true) {
        goosemaster5.innerHTML = `Collected`;
    }

    if (!goosemaster[0].achieved && colleggtor[0].achieved && goslevelator[0].achieved && horseSizedGoose[0].achieved && gooseSizedHorses[0].achieved) { //BEDINGUNGEN EINGEBEN
        goosemaster1.removeAttribute("disabled");
        goosemaster1.addEventListener("click", () => {
            goosemaster[0].achieved = true;
            storeItems[5].visibility = true;
            goosemaster1.setAttribute("disabled", true);
            goosemaster1.innerHTML = `Collected`;
        })
    }

    if (!goosemaster[1].achieved && colleggtor[1].achieved && goslevelator[1].achieved && horseSizedGoose[1].achieved && gooseSizedHorses[1].achieved) {
        goosemaster2.removeAttribute("disabled");
        goosemaster2.addEventListener("click", () => {
            goosemaster[1].achieved = true;
            inventoryAnimals[0].icon = `<img src="Images/EggHat.png" class="inventory-image"></img>`;
            goosemaster2.setAttribute("disabled", true);
            goosemaster2.innerHTML = `Collected`;
        })
    }

    if (!goosemaster[2].achieved && colleggtor[2].achieved && goslevelator[2].achieved && horseSizedGoose[2].achieved && gooseSizedHorses[2].achieved) {
        goosemaster3.removeAttribute("disabled");
        goosemaster3.addEventListener("click", () => {
            goosemaster[2].achieved = true;
            inventoryAnimals[1].icon = `<img src="Images/GoslingHat.png" class="inventory-image"></img>`;
            goosemaster3.setAttribute("disabled", true);
            goosemaster3.innerHTML = `Collected`;
        })
    }

    if (!goosemaster[3].achieved && colleggtor[3].achieved && goslevelator[3].achieved && horseSizedGoose[3].achieved && gooseSizedHorses[3].achieved) {
        goosemaster4.removeAttribute("disabled");
        goosemaster4.addEventListener("click", () => {
            goosemaster[3].achieved = true;
            inventoryAnimals[2].icon = `<img src="Images/GooseHat.png" class="inventory-image"></img>`;
            goosemaster4.setAttribute("disabled", true);
            goosemaster4.innerHTML = `Collected`;
        })
    }

    if (!goosemaster[4].achieved && colleggtor[4].achieved && goslevelator[4].achieved && horseSizedGoose[4].achieved && gooseSizedHorses[4].achieved) {
        goosemaster5.removeAttribute("disabled");
        goosemaster5.addEventListener("click", () => {
            goosemaster[4].achieved = true;
            storeItems[6].visibility = true;
            goosemaster5.setAttribute("disabled", true);
            goosemaster5.innerHTML = `Collected`;
        })
    }
}

const enableHorseSizedGoose = () => {
    const horseSizedGoose1 = document.getElementById("horse-sized-goose1");
    const horseSizedGoose2 = document.getElementById("horse-sized-goose2");
    const horseSizedGoose3 = document.getElementById("horse-sized-goose3");
    const horseSizedGoose4 = document.getElementById("horse-sized-goose4");
    const horseSizedGoose5 = document.getElementById("horse-sized-goose5");


    if (horseSizedGoose[0].achieved === true) {
        horseSizedGoose1.innerHTML = `Collected`;
    }
    if (horseSizedGoose[1].achieved === true) {
        horseSizedGoose2.innerHTML = `Collected`;
    }
    if (horseSizedGoose[2].achieved === true) {
        horseSizedGoose3.innerHTML = `Collected`;
    }
    if (horseSizedGoose[3].achieved === true) {
        horseSizedGoose4.innerHTML = `Collected`;
    }
    if (horseSizedGoose[4].achieved === true) {
        horseSizedGoose5.innerHTML = `Collected`;
    }

    if (inventoryAnimals[2].level >= 5 && !horseSizedGoose[0].achieved) {
        horseSizedGoose1.removeAttribute("disabled");
        horseSizedGoose1.addEventListener("click", () => {
            horseSizedGoose[0].achieved = true;
            horseSizedGoose1.setAttribute("disabled", true);
            horseSizedGoose1.innerHTML = `Collected`;
            passiveCorn = 5;
        })
    }

    if (inventoryAnimals[2].level >= 10 && !horseSizedGoose[1].achieved) {
        horseSizedGoose2.removeAttribute("disabled");
        horseSizedGoose2.addEventListener("click", () => {
            horseSizedGoose[1].achieved = true;
            horseSizedGoose2.setAttribute("disabled", true);
            horseSizedGoose2.innerHTML = `Collected`;
            passiveCorn = 10;
        })
    }

    if (inventoryAnimals[2].amount >= 50 && !horseSizedGoose[2].achieved) {
        horseSizedGoose3.removeAttribute("disabled");
        horseSizedGoose3.addEventListener("click", () => {
            horseSizedGoose[2].achieved = true;
            storeItems[3].visibility = true;
            horseSizedGoose3.setAttribute("disabled", true);
            horseSizedGoose3.innerHTML = `Collected`;
        })
    }

    if (inventoryAnimals[2].amount >= 100 && !horseSizedGoose[3].achieved) {
        horseSizedGoose4.removeAttribute("disabled");
        horseSizedGoose4.addEventListener("click", () => {
            horseSizedGoose[3].achieved = true;
            horseSizedGoose4.setAttribute("disabled", true);
            horseSizedGoose4.innerHTML = `Collected`;
            passiveCorn = 50;
        })
    }

    if (inventoryAnimals[2].amount >= 500 && !horseSizedGoose[4].achieved) {
        horseSizedGoose5.removeAttribute("disabled");
        horseSizedGoose5.addEventListener("click", () => {
            horseSizedGoose[4].achieved = true;
            storeItems[4].visibility = true;
            horseSizedGoose5.setAttribute("disabled", true);
            horseSizedGoose5.innerHTML = `Collected`;
        })
    }
}

const enableGooseSizedHorses = () => {
    const gooseSizedHorses1 = document.getElementById("goose-sized-horse1");
    const gooseSizedHorses2 = document.getElementById("goose-sized-horse2");
    const gooseSizedHorses3 = document.getElementById("goose-sized-horse3");
    const gooseSizedHorses4 = document.getElementById("goose-sized-horse4");
    const gooseSizedHorses5 = document.getElementById("goose-sized-horse5");

    if (gooseSizedHorses[0].achieved === true) {
        gooseSizedHorses1.innerHTML = `Collected`;
    }
    if (gooseSizedHorses[1].achieved === true) {
        gooseSizedHorses2.innerHTML = `Collected`;
    }
    if (gooseSizedHorses[2].achieved === true) {
        gooseSizedHorses3.innerHTML = `Collected`;
    }
    if (gooseSizedHorses[3].achieved === true) {
        gooseSizedHorses4.innerHTML = `Collected`;
    }
    if (gooseSizedHorses[4].achieved === true) {
        gooseSizedHorses5.innerHTML = `Collected`;
    }

    if (inventoryAnimals[2].amount >= 10 && !gooseSizedHorses[0].achieved) {
        gooseSizedHorses1.removeAttribute("disabled");
        gooseSizedHorses1.addEventListener("click", () => {
            gooseSizedHorses[0].achieved = true;
            gooseSizedHorses1.setAttribute("disabled", true);
            gooseSizedHorses1.innerHTML = `Collected`;
        })
    }

    if (inventoryAnimals[2].amount >= 50 && !gooseSizedHorses[1].achieved) {
        gooseSizedHorses2.removeAttribute("disabled");
        gooseSizedHorses2.addEventListener("click", () => {
            gooseSizedHorses[1].achieved = true;
            gooseSizedHorses2.setAttribute("disabled", true);
            gooseSizedHorses2.innerHTML = `Collected`;
        })
    }

    if (inventoryAnimals[2].amount >= 100 && !gooseSizedHorses[2].achieved) {
        gooseSizedHorses3.removeAttribute("disabled");
        gooseSizedHorses3.addEventListener("click", () => {
            gooseSizedHorses[2].achieved = true;
            gooseSizedHorses3.setAttribute("disabled", true);
            gooseSizedHorses3.innerHTML = `Collected`;
        })
    }

    if (inventoryAnimals[2].amount >= 500 && !gooseSizedHorses[3].achieved) {
        gooseSizedHorses4.removeAttribute("disabled");
        gooseSizedHorses4.addEventListener("click", () => {
            gooseSizedHorses[3].achieved = true;
            gooseSizedHorses4.setAttribute("disabled", true);
            gooseSizedHorses4.innerHTML = `Collected`;
        })
    }

    if (inventoryAnimals[2].amount >= 1000 && !gooseSizedHorses[4].achieved) {
        gooseSizedHorses5.removeAttribute("disabled");
        gooseSizedHorses5.addEventListener("click", () => {
            gooseSizedHorses[4].achieved = true;
            gooseSizedHorses5.setAttribute("disabled", true);
            gooseSizedHorses5.innerHTML = `Collected`;
        })
    }
}

const enableGoslevelator = () => {
    const goslevelator1 = document.getElementById("goslevelator1");
    const goslevelator2 = document.getElementById("goslevelator2");
    const goslevelator3 = document.getElementById("goslevelator3");
    const goslevelator4 = document.getElementById("goslevelator4");
    const goslevelator5 = document.getElementById("goslevelator5");

    if (goslevelator[0].achieved === true) {
        goslevelator1.innerHTML = `Collected`;
    }
    if (goslevelator[1].achieved === true) {
        goslevelator2.innerHTML = `Collected`;
    }
    if (goslevelator[2].achieved === true) {
        goslevelator3.innerHTML = `Collected`;
    }
    if (goslevelator[3].achieved === true) {
        goslevelator4.innerHTML = `Collected`;
    }
    if (goslevelator[4].achieved === true) {
        goslevelator5.innerHTML = `Collected`;
    }

    if (eggHatCounter >= 10 && !goslevelator[0].achieved) {
        goslevelator1.removeAttribute("disabled");
        goslevelator1.addEventListener("click", () => {
            goslevelator[0].achieved = true;
            goslevelator1.setAttribute("disabled", true);
            goslevelator1.innerHTML = `Collected`;
            inventoryItems[2].amount += goslevelator[0].warmthplus;
        })
    }
    
    if (eggHatCounter >= 50 && !goslevelator[1].achieved) {
        goslevelator2.removeAttribute("disabled");
        goslevelator2.addEventListener("click", () => {
            goslevelator[1].achieved = true;
            goslevelator2.setAttribute("disabled", true);
            goslevelator2.innerHTML = `Collected`;
            inventoryItems[2].amount += goslevelator[1].warmthplus;
        })
    }
    
    if (eggHatCounter >= 100 && !goslevelator[2].achieved) {
        goslevelator3.removeAttribute("disabled");
        goslevelator3.addEventListener("click", () => {
            goslevelator[2].achieved = true;
            goslevelator3.setAttribute("disabled", true);
            goslevelator3.innerHTML = `Collected`;
            inventoryItems[2].amount += goslevelator[2].warmthplus;
        })
    }
    
    if (eggHatCounter >= 500 && !goslevelator[3].achieved) {
        goslevelator4.removeAttribute("disabled");
        goslevelator4.addEventListener("click", () => {
            goslevelator[3].achieved = true;
            goslevelator4.setAttribute("disabled", true);
            goslevelator4.innerHTML = `Collected`;
            inventoryItems[2].amount += goslevelator[3].warmthplus;
        })
    }
    
    if (eggHatCounter >= 1000 && !goslevelator[4].achieved) {
        goslevelator5.removeAttribute("disabled");
        goslevelator5.addEventListener("click", () => {
            goslevelator[4].achieved = true;
            goslevelator5.setAttribute("disabled", true);
            goslevelator5.innerHTML = `Collected`;
            inventoryItems[2].amount += goslevelator[4].warmthplus;
        })
    }
}

const enableColleggtor = () => {
    const colleggtor1 = document.getElementById("colleggtor1");
    const colleggtor2 = document.getElementById("colleggtor2");
    const colleggtor3 = document.getElementById("colleggtor3");
    const colleggtor4 = document.getElementById("colleggtor4");
    const colleggtor5 = document.getElementById("colleggtor5");

    if (colleggtor[0].achieved === true) {
        colleggtor1.innerHTML = `Collected`;
    }
    if (colleggtor[1].achieved === true) {
        colleggtor2.innerHTML = `Collected`;
    }
    if (colleggtor[2].achieved === true) {
        colleggtor3.innerHTML = `Collected`;
    }
    if (colleggtor[3].achieved === true) {
        colleggtor4.innerHTML = `Collected`;
    }
    if (colleggtor[4].achieved === true) {
        colleggtor5.innerHTML = `Collected`;
    }

    if (eggAmtCounter >= 10 && !colleggtor[0].achieved) {
        colleggtor1.removeAttribute("disabled");
        colleggtor1.addEventListener("click", () => {
            colleggtor[0].achieved = true;
            colleggtor1.setAttribute("disabled", true);
            colleggtor1.innerHTML = `Collected`;
            inventoryAnimals[0].amount += colleggtor[0].eggplus;
        })
    }
    
    if (eggAmtCounter >= 50 && !colleggtor[1].achieved) {
        colleggtor2.removeAttribute("disabled");
        colleggtor2.addEventListener("click", () => {
            colleggtor[1].achieved = true;
            colleggtor2.setAttribute("disabled", true);
            colleggtor2.innerHTML = `Collected`;
            inventoryAnimals[0].amount += colleggtor[1].eggplus;
        })
    }
    
    if (eggAmtCounter >= 100 && !colleggtor[2].achieved) {
        colleggtor3.removeAttribute("disabled");
        colleggtor3.addEventListener("click", () => {
            colleggtor[2].achieved = true;
            colleggtor3.setAttribute("disabled", true);
            colleggtor3.innerHTML = `Collected`;
            inventoryAnimals[0].amount += colleggtor[2].eggplus;
        })
    }
    
    if (eggAmtCounter >= 500 && !colleggtor[3].achieved) {
        colleggtor4.removeAttribute("disabled");
        colleggtor4.addEventListener("click", () => {
            colleggtor[3].achieved = true;
            colleggtor4.setAttribute("disabled", true);
            colleggtor4.innerHTML = `Collected`;
            inventoryAnimals[0].amount += colleggtor[3].eggplus;
        })
    }
    
    if (eggAmtCounter >= 1000 && !colleggtor[4].achieved) {
        colleggtor5.removeAttribute("disabled");
        colleggtor5.addEventListener("click", () => {
            colleggtor[4].achieved = true;
            colleggtor5.setAttribute("disabled", true);
            colleggtor5.innerHTML = `Collected`;
            inventoryAnimals[0].amount += colleggtor[4].eggplus;
        })
    }
}

const listAchievements = () => {
    const colleggtorList = colleggtor
    .map((list)=>{
        return `
        <p><b>${list.requirement}</b> ... Reward: ${list.reward} ... ${list.button}</p>
        `;
    }).join(``);

    const goslevelatorList = goslevelator
    .map((list)=>{
        return `
        <p><b>${list.requirement}</b> ... Reward: ${list.reward} ... ${list.button}</p>
        `;
    }).join(``);

    const horseSizedGooseList = horseSizedGoose
    .map((list)=>{
        return `
        <p><b>${list.requirement}</b> ... Reward: ${list.reward} ... ${list.button}</p>
        `;
    }).join(``);

    const gooseSizedHorsesList = gooseSizedHorses
    .map((list)=>{
        return `
        <p><b>${list.requirement}</b></p><p>Reward: ${list.reward} ... ${list.button}</p>
        `;
    }).join(``);

    const goosemasterList = goosemaster
    .map((list)=>{
        return `
        <p><b>${list.requirement}</b></p><p>Reward: ${list.reward} ... ${list.button}</p>
        `;
    }).join(``);

    content.innerHTML = `
    <div class="inventory">
        <h2>Colleggtor</h2>
        ${colleggtorList}
        <br>
        <h2>Goslevelator</h2>
        ${goslevelatorList}
        <br>
        <h2>Horse sized Goose</h2>
        ${horseSizedGooseList}
        <br>
        <h2>Goose sized Horses</h2>
        ${gooseSizedHorsesList}
        <br>
        <h2>Goosemaster</h2>
        ${goosemasterList}
        <br>
    </div>`;
    
    enableButtons();
}