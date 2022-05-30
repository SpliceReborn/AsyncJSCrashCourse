/* Promise is either resolved or rejected
 * Resolved => followed by .then
 * Rejected => followed by .catch
 */

let inventory = {
    Fruits: ['strawberry', 'grape', 'banana', 'apple'],
    Liquid: ['water', 'ice'],
    Holder: ['cone', 'cup', 'stick'],
    Toppings: ['chocolate', 'peanuts']
}

let isShopOpened = true; 

let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if (isShopOpened) {
            setTimeout(() => {
                resolve(work())
            }, time)
        } else {
            reject(console.log("Sorry, the shop is closed"))
        }
    })
}

// Promise chaining .then.then.then, and error handling .catch
order(2000, () => {
    console.log(`${inventory.Fruits[0]} was selected`)
}).then(() => {
    return order(0000, () => console.log("Production has started"))
}).then(() => {
    return order(2000, () => console.log("Fruit was chopped"))
}).then(() => {
    return order(1000, () => console.log(`${inventory.Liquid[0]} and ${inventory.Liquid[1]} was added`))
}).then(() => {
    return order(1000, () => console.log("Machine is started"))
}).then(() => {
    return order(2000, () => console.log(`${inventory.Holder[0]} is selected`))
}).then(() => {
    return order(3000, () => console.log(`${inventory.Toppings[0]} was added`))
}).then(() => {
    return order(1000, () => console.log("Ice cream is served"))
}).catch(() => {
    console.log("Customer left!")
}).finally(() => {
    console.log("Day has ended")
})