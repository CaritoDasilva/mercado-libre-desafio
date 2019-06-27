const fetch = require('node-fetch');
const axios = require('axios');


const getProducts = async (productName) => {
    try {
        debugger
        const url = `https://api.mercadolibre.com/sites/MLA/search?q=:${productName}`
        const response = await axios({
            method: 'get',
            baseURL: url,

            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        const { data } = await response
        const filters = data.filters[0]
        const { values } = filters
        const categories = values[0].name
        console.log(values)
        const _items = (data.results).slice(0, 4)
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
