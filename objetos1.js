const prompt = require('readline-sync');

let products = []
let iD = 1

function registerProduct(id, name, priceSale, priceManufacturing, quantityStock) {
    const product = {
        id: iD,
        name: name,
        priceofsale: priceSale,
        priceofmanufacturing: priceManufacturing,
        quantityinstock: quantityStock,

    }

    iD++
    products.push(product)
    return products
}

function searchProductId(id) {
    for (let product of products) {
        if (id == product.id) {
            return `
ID: ${product.id}            
Product: ${product.name}
Price of sale: ${product.priceofsale}
Price of manufacturing: ${product.priceofmanufacturing}
Quantity in stock: ${product.quantityinstock}`
        }
    } return 'Invalid Id'

}

function searchProductPutName(name) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].name == name) {
            return `
ID: ${products[i].id}
Product: ${products[i].name}
Price of sale: ${products[i].priceofsale}
Price of manufacturing: ${products[i].priceofmanufacturing}
Quantity in stock: ${products[i].quantityinstock}`
        }
    } return 'Invalid name'
}

function showProduct() {
    return products
}

while (true) {
    console.clear()
    console.log('Choose an option  \n1 - Register product \n2 - Search producer by Id \n3 - Search producer by name \n4 - Show products \n0 - Exit \n')
    const option = Number(prompt.question(''))

    switch (option) {
        case 1:
            console.clear()
            const name = prompt.question('Enter the product name: ')
            const sale = Number(prompt.question('Enter the sellig price: ')).toFixed(2)
            const manufacturing = Number(prompt.question('Enter the manufacturing price: ')).toFixed(2)
            const stock = Number(prompt.question('Enter the quantity in stock: '))

            registerProduct(iD, name, sale, manufacturing, stock)
            
            console.log('Register product successfull')
            prompt.question('Press ENTER for continue')
            break

        case 2:
            const id = prompt.question('Enter the Id: ')
            console.clear()
            console.log(searchProductId(id))
            prompt.question('Press ENTER for continue')
            break

        case 3:
            const nameProduct = prompt.question('Enter the product name: ')
            console.clear()
            console.log(searchProductPutName(nameProduct))
            prompt.question('Press ENTER for continue')
            break

        case 4:
            console.clear()
            console.log(showProduct())
            prompt.question('Press ENTER for continue')
            break


        case 0:
            console.clear()
            console.log('Fim')
            process.exit()


        default:
            console.log('Invalid option')
            break


    }
}


