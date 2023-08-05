
let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

/*

// SET TIMEOUT

let order = (Fruit_name, call_production) => {
    
    setTimeout( () => {
        console.log(`${stocks.Fruits[Fruit_name ]} was selected`);
        call_production();    
    }, 2000)
    
}

let production = () => {
    setTimeout(() => {
        console.log("Production has started");
        setTimeout(() => {
            console.log("The fruit has been chopped");
            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
                setTimeout(() => {
                    console.log("The machine was started")
                    setTimeout(() => {
                        console.log(` ice cream was placed on a ${stocks.holder[0]}`)
                        setTimeout(() => {
                            console.log(`${stocks.toppings[0]} was selected for toppings`)
                            setTimeout(() => {
                                console.log("Serve Ice Cream");
                            }, 2000)
                        }, 3000)
                    }, 2000)
                }, 1000);
            }, 1000)
        }, 2000)
    }, 0o00)
}

order(0, production)

*/


let is_shop_open = true;

// PROMISE

/*

let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if(is_shop_open) {
          
            setTimeout(() => {
                resolve(work())
                

            }, time)
        }
        else {
            reject(console.log("Our shop is closed"))
        }
    })
}



order(2000, ()=> console.log(`${stocks.Fruits[0]} was selected`))

.then(() => {
    return order(0o00, () => console.log("Production has started"))   
   })

.then(() => {
    return order(2000, () => console.log("The fruit was chopped"))
})

.then(() => {
    return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`))
})

.then(() => {
    return order(1000, () => console.log("Machine was started"))
})

.then(() => {
    return order(2000, () => console.log(`The ice cream was placed on  ${stocks.holder[0]}`))
})

.then(() => {
    return order(3000, () => console.log(`${stocks.toppings[0]} was selected as toppings`))
})

.then(() => {
    return order(2000, () => console.log("Ice cream was served"))
})

.catch(() => {
    console.log("Customer left");
})

.finally(() => {
    console.log("day ended, shop is closed  ")
})

*/

/*
let order = () => {
    return new Promise((resolve, reject) => {
        if(is_shop_open) {
            resolve()
        }
        else {
            reject()
        }
    })
}
*/

// ASYNC AWAIT

function time(ms) {
    return new Promise((resolve, reject) => {

        if(is_shop_open){
            setTimeout(() => {
                resolve()
            }, ms)
        }
        else {
            reject(console.log("shop is closed"))
        }
    })
}

async function kitchen () {
    try {
        await time(2000)
        
        console.log("Start the production");

        await time(2000)
        console.log("cut the fruit");

        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

        await time(1000)
        console.log("Machine was started");

        await time(2000)
        console.log(`Ice cream was placed on ${stocks.holder[0]}`);

        await time(3000)
        console.log(`${stocks.toppings[0]} was selected`);

        await time(2000)
        console.log("Serve ice cream");
    }
    catch(error) {
        console.log(("Customer left", error));
    }

    finally{
        console.log("Day ended shop is closed");
    }
}

kitchen()