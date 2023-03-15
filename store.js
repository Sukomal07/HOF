const inventory = {
    item1:10.5,
    item2:6.3,
    item3:9.7,
    item4:4.3
}

// converted to Indian currency
const convertCurrency = (priceInUsd) =>{
    const exchangeRate = 80
    return priceInUsd * exchangeRate
}

const inventoryInRupees = Object.fromEntries(
    Object.entries(inventory).map(([itemName, priceInUsd]) =>[
        itemName,
        convertCurrency(priceInUsd)
    ])
)

console.log("Price in Usd:\n", inventory);
console.log("Price in rupees:\n" , inventoryInRupees);