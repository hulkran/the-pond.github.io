let eggAmtCounter = 0;
let eggHatCounter = 0;
let passiveCorn = 0;

// Inventory Animals
const inventoryAnimals = [
    {
        name: 'Egg',
        amount: 0,
        icon: `<img src="Images/Egg.png" class="inventory-image"></img>`,
        button: `<button id="level-egg">Level 1 Egg</button>`
    },
    {
        name: 'Gosling',
        amount: 0,
        icon: `<img src="Images/Gosling.png" class="inventory-image">`,
        button: `<button id="level-gosling">Level 1 Gosling</button>`
    },
    {
        name: 'Goose',
        amount: 1,
        level: 1,
        icon: `<img src="Images/Goose.png" class="inventory-image">`,
        button: `<button id="level-geese">Level all Geese</button>`
    }
];

//Inventory Items
const inventoryItems = [
    {
        name: 'Corn',
        amount: 0,
        icon: `<img src="Images/Corn.png" class="inventory-image">`,
        visibility: true
    },
    {
        name: 'Flower',
        amount: 0,
        icon: `<img src="Images/WaterLilly.png" class="inventory-image">`,
        visibility: true
    },
    {
        name: 'Warmth',
        amount: 0,
        icon: `<img src="Images/Warmth.png" class="inventory-image">`,
        visibility: true
    }
];

//Items at Store
const storeItems = [
    {
        name: 'Corn',
        buyPrice: 10,
        buyButton: `<button>Buy</button>`,
        sellPrice: 5,
        sellButton: `<button>Sell</button>`,
        icon: `<img src="Images/Corn.png" class="inventory-image">`,
        visibility: true
    },
    {
        name: 'Warmth',
        buyPrice: 20,
        buyButton: `<button>Buy</button>`,
        sellPrice: 10,
        sellButton: `<button>Sell</button>`,
        icon: `<img src="Images/Warmth.png" class="inventory-image">`,
        visibility: true
    },
    {
        name: 'Egg',
        buyPrice: 50,
        buyButton: `<button>Buy</button>`,
        sellPrice: 10,
        sellButton: `<button>Sell</button>`,
        icon: `<img src="Images/Egg.png" class="inventory-image"></img>`,
        visibility: true
    },
    {
        name: 'Bundle of Corn',
        buyPrice: 100,
        buyButton: `<button id="Corn-bundle-buy">Buy</button>`,
        sellPrice: 5,
        sellButton: `<button>Sell</button>`,
        icon: `<img src="Images/CornBundle.png" class="inventory-image">`,
        visibility: false
    },
    {
        name: 'Bag of Corn',
        buyPrice: 1000,
        buyButton: `<button id="Corn-bag-buy">Buy</button>`,
        sellPrice: 5,
        sellButton: `<button>Sell</button>`,
        icon: `<img src="Images/CornBag.png" class="inventory-image">`,
        visibility: false
    },
    {
        name: 'Balloon',
        buyPrice: 100,
        buyButton: `<button id="Balloon-buy">Buy</button>`,
        sellPrice: 5,
        sellButton: `<button>Sell</button>`,
        icon: `<img src="Images/Balloon.png" class="inventory-image">`,
        visibility: false
    },
    {
        name: 'Birthday Cake',
        buyPrice: 1000,
        buyButton: `<button id="Birthday-Cake-buy">Buy</button>`,
        sellPrice: 5,
        sellButton: `<button>Sell</button>`,
        icon: `<img src="Images/Birthday-Cake.png" class="inventory-image">`,
        visibility: false
    }
];

//List of Locations and their Functions, calls Functions for Buttons
const locations = [
    {
      name: "Farm",
      text: `<p>Press the button below to collect water lillies.
      You can trade them for corn or warmth at the store.
      With each click your geese have a 1% chance of laying an egg!</p>`
    },
    {
      name: "Barn",
      text: `<p>At the barn you can see your inventory and level up your goslings and geese with corn and hatch your eggs with warmth.
      You can get more resources at the store!</p>`
    },
    {
      name: "Store",
      text: `<p>Welcome to our country store. We have a good selection of corn, warmth and eggs for your goose farm.</p>`
    },
    {
      name: "Goals",
      text: `<p>Collect unlocked achievements here.</p>`
    }
];

// Lists the Inventory at Barn
const listInventory = (arrayAn, arrayIt) => {
    const inventoryList = arrayAn //Lists Animals
        .map((list)=>{
                return `
                <p>${list.icon}
                ${list.name}.....
                <span id="${list.name}-amount">${list.amount}</span>
                ${list.button}</p>
                `;
        }).join(``)
        +
        arrayIt //Lists Items
        .map((list)=>{
            if (list.visibility) {
                return `
                <p>${list.icon}
                ${list.name}.....
                <span id="${list.name}-amount">${list.amount}</span></p>
                `;
            }
        }).join(``)
        ;
        return content.innerHTML = `<div class="inventory">${inventoryList}</div>`;
}

//Lists Items at the Shop
const listShop = (array) => {
    const shopList = array
    .map((list)=>{
        if (list.visibility) {
            return `
            <p>${list.icon}
            ${list.name}
            .....
            Price: ${list.buyPrice}
            ..
            <span id="${list.name}-buy">${list.buyButton}</span>
            <!--.....
            ${list.sellPrice}
            ..
            <span id="${list.name}-sell">${list.sellButton}</span></p>-->`
        }
    }).join(``);
    const inventoryList = inventoryItems
    .map((list)=>{
        if (list.visibility) {
            return `
            <p>${list.icon}
            ${list.name}.....
            <span id="${list.name}-amount">${list.amount}</span></p>
            `;
        }
    }).join(``);

    content.innerHTML = `
    <div class="inventory">
        ${shopList}
        <br>
        <p>Inventory:</p>
        ${inventoryList}
    </div>`;
}

//Auto-refreshing inventory lists
let storeInterval;
let barnInterval;

const barnRefresh = () => {
    barnInterval = setInterval(() => {
        const invFlower = document.getElementById("Flower-amount");
        invFlower.innerHTML = inventoryItems[1].amount;
        const invCorn = document.getElementById("Corn-amount");
        invCorn.innerHTML = inventoryItems[0].amount;
    }, 1000);
}

const storeRefresh = () => {
    storeInterval = setInterval(() => {
        document.getElementById("Flower-amount").innerHTML = inventoryItems[1].amount;
        document.getElementById("Corn-amount").innerHTML = inventoryItems[0].amount;
        document.getElementById("Warmth-amount").innerHTML = inventoryItems[2].amount;
        //document.getElementById("Balloon-amount").innerHTML = inventoryItems[3].amount;
        //document.getElementById("Birthday-Cake-amount").innerHTML = inventoryItems[4].amount;
    }, 500);
}

const exitStore = () => {
    clearInterval(storeInterval);
}

const exitBarn = () => {
    clearInterval(barnInterval);
}
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

//saving the game
var saveGame = localStorage.getItem("GooseGameSave");
var gameData = {
    inventoryAnimals: inventoryAnimals,
    inventoryItems: inventoryItems,
    storeItems: storeItems,
    colleggtor: colleggtor, 
    goslevelator: goslevelator,
    horseSizedGoose: horseSizedGoose,
    gooseSizedHorses: gooseSizedHorses,
    goosemaster: goosemaster,
    eggAmtCounter: eggAmtCounter,
    eggHatCounter: eggHatCounter,
    passiveCorn: passiveCorn,
    lastTick: Date.now()
}

//Initializing Buttons and HTML Elements
const button0 = document.getElementById("button0");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button4 = document.getElementById("button4");
const saveGameBtn = document.getElementById("save-game");
const resetBtn = document.getElementById("reset");
const description = document.getElementById("description");
const content = document.getElementById("content");
const flowersInInventory = document.getElementById("flowers-in-inventory");
const geeseLevel = document.getElementById("geese-level");
const button3 = document.getElementById("button3");

//Updates Locations
const update = (location) => {
    description.innerHTML = `${location.text}`;
    switch (location.name) {
        case "Farm":
            saveGameLoop();
            exitStore();
            exitBarn();
            content.innerHTML = `<button id="collect"></button>`;
            collectFlowers();
            break;
        case "Barn":
            saveGameLoop();
            exitStore();
            barnRefresh();
            listInventory(inventoryAnimals, inventoryItems);
            levelAnimals();
            break;
        case "Store":
            saveGameLoop();
            exitBarn();
            listShop(storeItems);
            buyItems();
            storeRefresh();
            //sellItems();
            break;
        case "Goals":
            saveGameLoop();
            exitBarn();
            exitStore();
            listAchievements();
    }
}

//calling Update Function
function goFarm() {update(locations[0]);}
function goBarn() {update(locations[1]);}
function goStore() {update(locations[2]);}
function goGoals() {update(locations[3])}

//Calls Functions for Buttons
button0.onclick = goFarm;
button1.onclick = goBarn;
button2.onclick = goStore;
button4.onclick = goGoals;
button3.addEventListener("click", () => {
    saveGameLoop();
    window.location.reload();
});

//Function to collect Flowers
const collectFlowers = () => {
    setTimeout(() => {
        const buttonCollect = document.getElementById("collect");
        if (!buttonCollect) return;
        buttonCollect.addEventListener("click", () => {
            const flowerAmount = scaleFlowers();
            inventoryItems[1].amount += flowerAmount;
            updateFooterFlower(inventoryItems[1].amount);
            if (eggChance()) {
                inventoryAnimals[0].amount += 1;
                eggAmtCounter ++;
                alert("Corngraduations! Your Geese layed an Egg!");
            }
        });
    }, 100);
};

//Function for Chance of Geese laying an Egg while collecting Flowers
const eggChance = () => {
    const rand = Math.floor(Math.random()*100) + 1;
    console.log(rand);
    if (rand === 33) {
        return true;
    } else if (gooseSizedHorses[0].achieved === true && (rand === 33 || rand === 44)) {
        return true;
    } else if (gooseSizedHorses[1].achieved === true && (rand === 33 || rand === 44 || rand === 55)) {
        return true;
    } else if (gooseSizedHorses[2].achieved === true && (rand === 33 || rand === 44 || rand === 55 || rand === 66)) {
        return true;
    } else if (gooseSizedHorses[3].achieved === true && (rand === 33 || rand === 44 || rand === 55 || rand === 66 || rand === 77)) {
        return true;
    } else if (gooseSizedHorses[4].achieved === true &&
    (rand === 33 || rand === 44 || rand === 55 || rand === 66 || rand === 77 ||
    rand === 99 || rand === 22 || rand === 11 || rand === 1 || rand === 5)) {
        return true;
    } else {
        return false;
    }
}

//Function for buying Items
const buyItems = () => {
    const buyCorn = document.getElementById("Corn-buy");
    const buyWarmth = document.getElementById("Warmth-buy");
    const buyEgg = document.getElementById("Egg-buy");
    const buyCornBundle = document.getElementById("Corn-bundle-buy");
    const buyCornBag = document.getElementById("Corn-bag-buy");
    const buyBalloon = document.getElementById("Balloon-buy");
    const buyCake = document.getElementById("Birthday-Cake-buy");

    buyCorn.addEventListener("click", () => {
        //checks if enough Flowers to buy Item and gives alert if not and updates Footer UI
        if (inventoryItems[1].amount < storeItems[0].buyPrice) {
            alert("Not enough Flowers!");
            updateFooterFlower(inventoryItems[1].amount);
            return;
        }
        else {
            const cornPrice = scaleCornPrice();
            inventoryItems[1].amount -= cornPrice; // reduces Flowers buy scaled Corn Price
            updateFooterFlower(inventoryItems[1].amount); // updates UI
            inventoryItems[0].amount += 10; //adds one of bought Item to Inventory
        }
    });
    buyWarmth.addEventListener("click", () => {
        if (inventoryItems[1].amount < storeItems[1].buyPrice) {
            alert("Not enough Flowers!")
            updateFooterFlower(inventoryItems[1].amount);
            return;
        }
        else {
            inventoryItems[1].amount -= storeItems[1].buyPrice;
            updateFooterFlower(inventoryItems[1].amount);
            inventoryItems[2].amount += 1;
        }
    });
    buyEgg.addEventListener("click", () => {
        if (inventoryItems[1].amount < storeItems[2].buyPrice) {
            alert("Not enough Flowers!")
            updateFooterFlower(inventoryItems[1].amount);
            return;
        }
        else {
            inventoryItems[1].amount -= storeItems[2].buyPrice;
            updateFooterFlower(inventoryItems[1].amount);
            eggAmtCounter ++;
            inventoryAnimals[0].amount += 1;
        }
    });
    if (storeItems[3].visibility) {
        buyCornBundle.addEventListener("click", () => {
            if (inventoryItems[1].amount < storeItems[3].buyPrice) {
                alert("Not enough Flowers!");
                updateFooterFlower(inventoryItems[1].amount);
                return;
            }
            else {
                inventoryItems[1].amount -= storeItems[3].buyPrice;
                updateFooterFlower(inventoryItems[1].amount);
                inventoryItems[0].amount += 100;
            }
        });
    }
    if (storeItems[4].visibility) {
        buyCornBag.addEventListener("click", () => {
            if (inventoryItems[1].amount < storeItems[4].buyPrice) {
                alert("Not enough Flowers!");
                updateFooterFlower(inventoryItems[1].amount);
                return;
            }
            else {
                inventoryItems[1].amount -= storeItems[4].buyPrice;
                updateFooterFlower(inventoryItems[1].amount);
                inventoryItems[0].amount += 1000;
            }
        });
    }
    if (storeItems[5].visibility) {
        buyBalloon.addEventListener("click", () => {
            if (inventoryItems[1].amount < storeItems[5].buyPrice) {
                alert("Not enough Flowers!");
                updateFooterFlower(inventoryItems[1].amount);
                return;
            }
            else {
                inventoryItems[1].amount -= storeItems[5].buyPrice;
                updateFooterFlower(inventoryItems[1].amount);
                randomFlower = Math.floor(Math.random() * (500 - 50 + 1)) + 50;
                inventoryItems[1].amount += randomFlower;
                alert(`The Balloon popped and gave you ${randomFlower} Flowers!`)
            }
        });
    }
    if (storeItems[6].visibility) {
        buyCake.addEventListener("click", () => {
            if (inventoryItems[1].amount < storeItems[6].buyPrice) {
                alert("Not enough Flowers!");
                updateFooterFlower(inventoryItems[1].amount);
                return;
            }
            else {
                inventoryItems[1].amount -= storeItems[6].buyPrice;
                updateFooterFlower(inventoryItems[1].amount);
                inventoryItems[0].amount += 100000;
            }
        });
    }
}

//Function to level Animals
const levelAnimals = () => {
    const levelEgg = document.getElementById("level-egg");
    const levelGosling = document.getElementById("level-gosling");
    const levelGeese = document.getElementById("level-geese");
    const cornAmount = document.getElementById("Corn-amount");
    const warmthAmount = document.getElementById("Warmth-amount");
    const eggAmount = document.getElementById("Egg-amount");
    const goslingAmount = document.getElementById("Gosling-amount");
    const gooseAmount = document.getElementById("Goose-amount");
    hideButtons(levelEgg, levelGosling, levelGeese);
    levelEgg.addEventListener("click", () => {
        if (inventoryAnimals[0].amount < 1) { //checks for eggs and hides button
            hideButtons(levelEgg, levelGosling, levelGeese);
            return;
        }
        else if (inventoryItems[2].amount < 10) { //checks for warmth
            alert("Not enough Warmth!");
            return;
        }
        else {
            //adapt resources
            inventoryAnimals[0].amount -= 1;
            inventoryAnimals[1].amount += 1;
            inventoryItems[2].amount -= 10;
            eggHatCounter ++;
            //update UI
            warmthAmount.innerHTML = `${inventoryItems[2].amount}`;
            eggAmount.innerHTML = `${inventoryAnimals[0].amount}`;
            goslingAmount.innerHTML = `${inventoryAnimals[1].amount}`;
            updateFooterLevel(inventoryAnimals[2].level);
            hideButtons(levelEgg, levelGosling, levelGeese);
        }
    });

    levelGosling.addEventListener("click", () => {
        if (inventoryAnimals[1].amount < 1) {
            hideButtons(levelEgg, levelGosling, levelGeese);
            return;
        } else if (inventoryItems[0].amount < 5) {
            alert("Not enough Food!")
            return;
        }
        else {
            inventoryAnimals[1].amount -= 1;
            inventoryAnimals[2].amount += 1;
            inventoryItems[0].amount -= 5;
            cornAmount.innerHTML = `${inventoryItems[0].amount}`;
            goslingAmount.innerHTML = `${inventoryAnimals[1].amount}`;
            gooseAmount.innerHTML = `${inventoryAnimals[2].amount}`;
            updateFooterLevel(inventoryAnimals[2].level);
            hideButtons(levelEgg, levelGosling, levelGeese);
        }
    });

    levelGeese.addEventListener("click", () => {
        const requiredCorn = scaleGeese();
        if (inventoryAnimals[2].amount < 1) {
            hideButtons(levelEgg, levelGosling, levelGeese);
            return;
        } else if (inventoryItems[0].amount < requiredCorn) {
            alert("Not enough Food!");
            return;
        }
        else {
            inventoryAnimals[2].level += 1;
            inventoryItems[0].amount -= requiredCorn;
            cornAmount.innerHTML = `${inventoryItems[0].amount}`;
            updateFooterLevel(inventoryAnimals[2].level);
            hideButtons(levelEgg, levelGosling, levelGeese);
        }
    });
};

//Scaling Functions
const scaleCornPrice = () => {
    const basePrice = 10;
    const priceMultiplier = 1 + (inventoryAnimals[2].amount * 0.05);
    return Math.floor(basePrice * priceMultiplier);
}

const scaleFlowers = () => {
    let baseFlowers = 1;
    let level = inventoryAnimals[2].level;
    let amount = inventoryAnimals[2].amount;
    let scalingFactor = Math.floor((level * 1.1) + (amount * 1.05));
    let gottenFlower = baseFlowers * scalingFactor;
    return gottenFlower;
}

const scaleGeese = () => { 
    let baseScaling = 10;
    let level = inventoryAnimals[2].level; 
    let scalingFactor = Math.pow(2, Math.floor(level / 7)); //Math.pow gives how often to double the cost, Math.floor gives how often 7 levels have been completed
    let requiredCorn = baseScaling * scalingFactor;
    return requiredCorn;
}

const hideButtons = (egg, gosling, geese) => {
    setTimeout(() => {
        egg.style.display = inventoryAnimals[0].amount > 0 ? 'inline-block' : egg.setAttribute("disabled", true);
        gosling.style.display = inventoryAnimals[1].amount > 0 ? 'inline-block' : gosling.setAttribute("disabled", true);
        geese.style.display = inventoryAnimals[2].amount > 0 ? 'inline-block' : geese.setAttribute("disabled", true);
    }, 50);
}

//Functions to update Footer
const updateFooterFlower = (amount) => {
    if (flowersInInventory) {
        flowersInInventory.innerHTML = `${amount}`;
    }
}

const updateFooterLevel = (level) => {
    if (geeseLevel) {
        geeseLevel.innerHTML = `${level}`;
    }
}

//Functions to save game or reset
const savegame = JSON.parse(localStorage.getItem("GooseGameSave"));
if (savegame !== null) {
    gameData = savegame;

    gameData.inventoryAnimals.forEach((savedAnimal, index) => {
        if (inventoryAnimals[index]) {
            inventoryAnimals[index].amount = savedAnimal.amount;
            inventoryAnimals[index].icon = savedAnimal.icon;
            if (savedAnimal.level) {
                inventoryAnimals[index].level = savedAnimal.level;
            }
        }
    });

    gameData.inventoryItems.forEach((savedItem, index) => {
        if (inventoryItems[index]) {
            inventoryItems[index].amount = savedItem.amount;
        }
    });

    gameData.storeItems.forEach((savedStorePrice, index) => {
        if (storeItems[index]) {
            storeItems[index].buyPrice = savedStorePrice.buyPrice;
            storeItems[index].visibility = savedStorePrice.visibility;
        }
    });

    gameData.colleggtor.forEach((savedAchievement, index) => {
        if (colleggtor[index]) {
            colleggtor[index].achieved = savedAchievement.achieved;
        }
    });

    gameData.goslevelator.forEach((savedAchievement, index) => {
        if (goslevelator[index]) {
            goslevelator[index].achieved = savedAchievement.achieved;
        }
    });

    gameData.horseSizedGoose.forEach((savedAchievement, index) => {
        if (horseSizedGoose[index]) {
            horseSizedGoose[index].achieved = savedAchievement.achieved;
        }
    });

    gameData.gooseSizedHorses.forEach((savedAchievement, index) => {
        if (gooseSizedHorses[index]) {
            gooseSizedHorses[index].achieved = savedAchievement.achieved;
        }
    });

    gameData.goosemaster.forEach((savedAchievement, index) => {
        if (goosemaster[index]) {
            goosemaster[index].achieved = savedAchievement.achieved;
        }
    });

    eggAmtCounter = gameData.eggAmtCounter;
    eggHatCounter = gameData.eggHatCounter;
    passiveCorn = gameData.passiveCorn;
}

//updates Footer after saving GameData
updateFooterFlower(inventoryItems[1].amount);
updateFooterLevel(inventoryAnimals[2].level);

const saveGameLoop = () => {
    gameData.inventoryAnimals = inventoryAnimals.map(animal => ({
        name: animal.name,
        amount: animal.amount,
        icon: animal.icon,
        level: animal.level || 1, // makes sure there is a level
        upgrade: animal.upgrade
    }));

    gameData.inventoryItems = inventoryItems.map(item => ({
        name: item.name,
        amount: item.amount,
        visibility: item.visibility
    }));

    gameData.storeItems = storeItems.map(item => ({
        buyPrice: item.buyPrice,
        visibility: item.visibility
    }));

    gameData.colleggtor = colleggtor.map(item => ({
        achieved: item.achieved
    }));

    gameData.goslevelator = goslevelator.map(item => ({
        achieved: item.achieved
    }));

    gameData.horseSizedGoose = horseSizedGoose.map(item => ({
        achieved: item.achieved
    }));
    
    gameData.gooseSizedHorses = gooseSizedHorses.map(item => ({
        achieved: item.achieved
    }));
    
    gameData.goosemaster = goosemaster.map(item => ({
        achieved: item.achieved
    }));

    gameData.eggAmtCounter = eggAmtCounter;
    
    gameData.eggHatCounter = eggHatCounter;

    gameData.passiveCorn = passiveCorn;

    gameData.lastTick = Date.now();
    localStorage.setItem("GooseGameSave", JSON.stringify(gameData));
    console.log("Game Saved: ", gameData);
}

saveGameBtn.onclick = saveGameLoop;

//Auto-save
window.setInterval(() => {
    saveGameLoop();
}, 30000);

//Auto-tick Flower
window.setInterval(() => {
    let autoFlower = 1 + Math.floor(scaleFlowers() / 5);
    inventoryItems[1].amount += autoFlower;
    updateFooterFlower(inventoryItems[1].amount);
}, 1000);

//Auto-tick Corn
window.setInterval(() => {
    inventoryItems[0].amount += passiveCorn;
    console.log(inventoryItems[0].amount);
}, 1000);

//reset
resetBtn.addEventListener ("click", () => {
    if(confirm("Are you sure?!")) {
        localStorage.removeItem("GooseGameSave");
        window.location.reload();    
    }
});

/*
//Function for selling Items
const sellItems = () => {
    const sellCorn = document.getElementById("Corn-sell");
    const sellWarmth = document.getElementById("Warmth-sell");
    const sellEgg = document.getElementById("Egg-sell");

    sellCorn.addEventListener("click", () => {
        //checks if Item is in Inventory
        if (inventoryItems[0].amount < 1) {
            alert("No Corn in the Barn!");
            return;
        }
        else {
            inventoryItems[1].amount += storeItems[0].sellPrice; // adds sellPrice to Flowers
            updateFooterFlower(inventoryItems[1].amount); // updates UI
            inventoryItems[0].amount -= 1; //subtracts one of bought Item from Inventory
        }
    });
    sellWarmth.addEventListener("click", () => {
        if (inventoryItems[2].amount < 1) {
            alert("No Warmth in the Barn!")
            return;
        }
        else {
            inventoryItems[1].amount += storeItems[1].sellPrice;
            updateFooterFlower(inventoryItems[1].amount);
            inventoryItems[2].amount -= 1;
        }
    });
    sellEgg.addEventListener("click", () => {
        if (inventoryAnimals[0].amount < 1) {
            alert("No Eggs in the Barn!")
            return;
        }
        else {
            inventoryItems[1].amount += storeItems[2].sellPrice;
            updateFooterFlower(inventoryItems[1].amount);
            inventoryAnimals[0].amount -= 1;
        }
    });
}*/
