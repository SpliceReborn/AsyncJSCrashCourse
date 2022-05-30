/* Async Await 
 */

let inventory = {
    Fruits: ['strawberry', 'grape', 'banana', 'apple'],
    Liquid: ['water', 'ice'],
    Holder: ['cone', 'cup', 'stick'],
    Toppings: ['chocolate', 'peanuts']
}

let isShopOpened = true; 

function time(ms) {
    return new Promise( (resolve, reject) => {
        if (isShopOpened) {
            setTimeout(resolve, ms)
        } else {
            reject(console.log("Shop is closed."))
        }
    })
}

async function kitchen() {
    try {
        await time(2000)
        console.log(`${inventory.Fruits[0]} was selected`)
        console.log("Production has started")
        await time(2000)
        console.log("Fruit was chopped")
        await time(1000)
        console.log(`${inventory.Liquid[0]} and ${inventory.Liquid[1]} was added`)
        await time(1000)
        console.log("Machine is started")
        await time(2000)
        console.log(`${inventory.Holder[0]} is selected`)
        await time(3000)
        console.log(`${inventory.Toppings[0]} was added`)
        await time(1000)
        console.log("Ice cream is served")
    } catch(error) {
        console.log("Customer left")
    } finally {
        console.log("Day has ended")
    }
}

kitchen() 