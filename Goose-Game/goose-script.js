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
