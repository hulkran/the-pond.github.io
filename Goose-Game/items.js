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