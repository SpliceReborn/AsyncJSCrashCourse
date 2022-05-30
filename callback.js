let inventory = {
    Fruits: ['strawberry', 'grape', 'banana', 'apple'],
    Liquid: ['water', 'ice'],
    Holder: ['cone', 'cup', 'stick'],
    Toppings: ['chocolate', 'peanuts']
}

let order = (fruitName, callProduction) => {
    setTimeout(() => {
        console.log(`Order for ${inventory.Fruits[fruitName]}`)
        callProduction()
    }, 2000)
}

let production = () => {
    setTimeout(() => {
        console.log("Order received, starting production")
        setTimeout(() => {
            console.log("Fruit has been chopped")
            setTimeout(() => {
                console.log(`${inventory.Liquid[0]} and ${inventory.Liquid[1]} was added`)
                setTimeout(() => {
                    console.log("Starting the machine")
                    setTimeout(() => {
                        console.log(`Ice cream was placed on a ${inventory.Holder[0]}`)
                        setTimeout(() => {
                            console.log(`${inventory.Toppings[0]} was added`)
                            setTimeout(() => {
                                console.log("Ice cream was served")
                            }, 2000)
                        }, 3000)
                    }, 2000)
                }, 1000)
            }, 1000)
        }, 2000)
    }, 0000)
}

order(0, production)