const fetch = require('node-fetch');


const getProducts = async (productName) => {
    try {
        debugger
        const url = `https://api.mercadolibre.com/sites/MLA/search?q=:${productName}`
        const response = await fetch(url);
        const responseJson = await response.json()
        const filters = responseJson.filters[0]
        const { values } = filters
        const categories = values[0].name
        console.log(values)
        const _items = (responseJson.results).slice(0, 4)
        const items = _items.map(item => {
            console.log(item)
            let _decimals = item.installments.amount.toString().split('.')
            const itemsArray = []
            const data = [

                {
                    id: item.id,
                    title: item.title,
                    price: {
                        currency: item.currency_id,
                        amount: item.installments.amount,
                        decimals: parseInt(_decimals[1])
                    },
                    picture: item.thumbnail,
                    condition: item.condition,
                    free_shipping: item.shipping.free_shipping
                }
            ]
            itemsArray.push(data)
            return itemsArray
        })
        const products = {
            author: {
                name: 'Carolina',
                lastname: 'Da Silva'
            },
            items,
            categories
        }

        return products
    }
    catch (error) {
        throw error
    }

}

module.exports = getProducts;
