// Inventory Animals
const inventoryAnimals = [
    {
        name: 'Egg',
        amount: 0,
        icon: `<img src="Images/egg.png" class="inventory-image"></img>`,
        button: `<button id="level-egg">Level 1 Egg</button>`
    },
    {
        name: 'Gosling',
        amount: 0,
        icon: `<img src="Images/gosling.png" class="inventory-image">`,
        button: `<button id="level-gosling">Level 1 Gosling</button>`
    },
    {
        name: 'Goose',
        amount: 1,
        level: 1,
        icon: `<img src="Images/goose1.png" class="inventory-image">`,
        button: `<button id="level-geese">Level all Geese</button>`
    }
];

//Inventory Items
const inventoryItems = [
    {
        name: 'Corn',
        amount: 0,
        icon: `<img src="Images/food.png" class="inventory-image">`
    },
    {
        name: 'Flower',
        amount: 0,
        icon: `<img src="Images/flower.png" class="inventory-image">`
    },
    {
        name: 'Warmth',
        amount: 0,
        icon: `<img src="Images/sun.png" class="inventory-image">`
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
        icon: `<img src="Images/food.png" class="inventory-image">`
    },
    {
        name: 'Warmth',
        buyPrice: 20,
        buyButton: `<button>Buy</button>`,
        sellPrice: 10,
        sellButton: `<button>Sell</button>`,
        icon: `<img src="Images/sun.png" class="inventory-image">`
    },
    {
        name: 'Egg',
        buyPrice: 50,
        buyButton: `<button>Buy</button>`,
        sellPrice: 10,
        sellButton: `<button>Sell</button>`,
        icon: `<img src="Images/egg.png" class="inventory-image"></img>`
    }
];

//saving the game
var saveGame = localStorage.getItem("GooseGameSave");
var gameData = {
    inventoryAnimals: inventoryAnimals,
    inventoryItems: inventoryItems,
    storeItems: storeItems,
    lastTick: Date.now()
}

//Initializing Buttons and HTML Elements
const button0 = document.getElementById("button0");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const description = document.getElementById("description");
const content = document.getElementById("content");
const flowersInInventory = document.getElementById("flowers-in-inventory");
const geeseLevel = document.getElementById("geese-level");
const saveGameBtn = document.getElementById("save-game");
const resetBtn = document.getElementById("reset");

//Calls Functions for Buttons
button0.onclick = goFarm;
button1.onclick = goBarn;
button2.onclick = goStore;

//List of Locations and their Functions, calls Functions for Buttons
const locations = [
  {
    name: "Farm",
    "button text": ["Farm", "Barn", "Store"],
    "button functions": [goFarm, goBarn, goStore],
    text: "Collect Flowers at the Farm to buy stuff at the Store.", 
  },
  {
    name: "Barn",
    "button text": ["Farm", "Barn", "Store"],
    "button functions": [goFarm, goBarn, goStore],
    text: "You enter the Barn. Look at your Inventory here or level up your Geese."
  },
  {
    name: "Store",
    "button text": ["Farm", "Barn", "Store"],
    "button functions": [goFarm, goBarn, goStore],
    text: "You enter the Store. Buy and sell items here."
  }
];

//Updates Locations
const update = (location) => {
    button0.innerText = location["button text"][0];
    button1.innerText = location["button text"][1];
    button2.innerText = location["button text"][2];
    button0.onclick = location["button functions"][0];
    button1.onclick = location["button functions"][1];
    button2.onclick = location["button functions"][2];
    description.innerHTML = `${location.text}`;
    switch (location.name) {
        case "Farm":
            content.innerHTML = `
            <button id="collect">Collect Flowers</button>`;
            collectFlowers();
            break;
        case "Barn":
            listInventory(inventoryAnimals, inventoryItems);
            levelAnimals();
            break;
        case "Store":
            listShop(storeItems);
            buyItems();
            sellItems();
            break;
    }
}

//calling Update Function and hiding initial Button0
function goFarm() {
    update(locations[0]);
}
function goBarn() {
    update(locations[1]);
}
function goStore() {
    update(locations[2]);
}

// Lists the Inventory at Barn
const listInventory = (arrayAn, arrayIt) => {
    const inventoryList = arrayAn //Lists Animals
        .map((list)=>{
            return `
            <p>${list.icon}
            ${list.name}
            .....
            <span id="${list.name}-amount">${list.amount}</span>
            .....
            ${list.button}</p>
            `;
        }).join(``)
        + `<hr>` +
        arrayIt //Lists Items
        .map((list)=>{
            return `
            <p>${list.icon}
            ${list.name}
            .....
            <span id="${list.name}-amount">${list.amount}</span></p>
            `;
        }).join(``)
        ;
        return content.innerHTML = inventoryList;
}

//Lists Items at the Shop
const listShop = (array) => {
    const shopList = array
    .map((list)=>{
        return `
        <p>${list.icon}
        ${list.name}
        .....
        ${list.buyPrice}
        ..
        <span id="${list.name}-buy">${list.buyButton}</span>
        .....
        ${list.sellPrice}
        ..
        <span id="${list.name}-sell">${list.sellButton}</span></p>
        `;
    }).join(``);
    return content.innerHTML = shopList;
}

//Function to collect Flowers
const collectFlowers = () => { //NEEDS SCALING FOR BETTER LEVEL OR MORE GEESE
    setTimeout(() => {
        const buttonCollect = document.getElementById("collect");
        if (!buttonCollect) return;
        buttonCollect.addEventListener("click", () => {
            const flowerAmount = scaleFlowers();
            inventoryItems[1].amount += flowerAmount;
            updateFooterFlower(inventoryItems[1].amount);
            if (eggChance()) {
                inventoryAnimals[0].amount += 1;
                alert("Corngraduations! Your Geese layed an Egg!");
            }
        });
    }, 100);
};

//Function for Chance of Geese laying an Egg while collecting Flowers
const eggChance = () => {
    const randomNumber = Math.floor(Math.random()*100) + 1;
    if (randomNumber === 33) {
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
            inventoryAnimals[0].amount += 1;
        }
    });
}

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
    
    let scalingFactor = Math.pow(2, Math.floor(level / 7));
    //Math.pow gives how often to double the cost, Math.floor gives how often 7 levels have been completed

    let requiredCorn = baseScaling * scalingFactor;
    return requiredCorn;
}

const hideButtons = (egg, gosling, geese) => {
    setTimeout(() => {
        egg.style.display = inventoryAnimals[0].amount > 0 ? `inline-block` : egg.setAttribute("disabled", true);
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
        }
    })
}

//updates Footer after saving GameData
updateFooterFlower(inventoryItems[1].amount);
updateFooterLevel(inventoryAnimals[2].level);

const saveGameLoop = () => {
    gameData.inventoryAnimals = inventoryAnimals.map(animal => ({
        name: animal.name,
        amount: animal.amount,
        level: animal.level || 1 // makes sure there is a level
    }));

    gameData.inventoryItems = inventoryItems.map(item => ({
        name: item.name,
        amount: item.amount
    }));

    gameData.storeItems = storeItems.map(item => ({
        buyPrice: item.buyPrice
    }));

    gameData.lastTick = Date.now();
    localStorage.setItem("GooseGameSave", JSON.stringify(gameData));
    console.log("Game Saved: ", gameData);
}

saveGameBtn.onclick = saveGameLoop;

//Auto-save
window.setInterval(() => {
    saveGameLoop();
}, 30000);

//Auto-tick
window.setInterval(() => {
    let autoFlower = 1 + Math.floor(scaleFlowers() / 5);
    inventoryItems[1].amount += autoFlower;
    updateFooterFlower(inventoryItems[1].amount);
}, 1000)

window.setInterval(() => { //gives Error when not in BARN
    const invFlower = document.getElementById("Flower-amount");
    invFlower.innerHTML = inventoryItems[1].amount;
}, 1000);

resetBtn.addEventListener ("click", () => {
    if(confirm("Are you sure?!")) {
        localStorage.removeItem("GooseGameSave");
        window.location.reload();    
    }
});