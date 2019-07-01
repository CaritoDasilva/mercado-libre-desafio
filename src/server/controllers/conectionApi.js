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
        const categories = values[0]
        const _items = (data.results).slice(0, 4)
        const items = []
        const itemsArray = _items.map(item => {
            let _decimals = item.price.toString().split('.')
            const data =
            {
                id: item.id,
                title: item.title,
                price: {
                    currency: item.currency_id,
                    amount: item.price,
                    decimals: parseInt(_decimals[1])
                },
                picture: item.thumbnail,
                condition: item.condition,
                free_shipping: item.shipping.free_shipping,
                city: item.address.city_name
            }
            items.push(data)
            return items
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
const getDescription = async (id) => {
    debugger
    const url = `https://api.mercadolibre.com/items/${id}`
    const urlDescription = `https://api.mercadolibre.com/items/${id}/description`
    const response = await Promise.all([
        axios.get(url),
        axios.get(urlDescription)
    ])
        .then((responses) => { // Responde a todas las promesas
            itemDetail = responses[0].data
            itemDescription = responses[1].data
            let _decimals = itemDetail.price.toString().split('.')

            const descriptionProduct = {
                author: {
                    name: 'Carolina',
                    lastname: 'Da Silva'
                },
                item: {
                    id: itemDetail.id,
                    title: itemDetail.title,
                    price: {
                        currency: itemDetail.currency_id,
                        amount: itemDetail.price,
                        decimals: parseInt(_decimals[1]),
                    },
                    picture: itemDetail.thumbnail,
                    condition: itemDetail.condition,
                    free_shipping: itemDetail.shipping.free_shipping,
                    sold_quantity: itemDetail.sold_quantity,
                    description: itemDescription.plain_text
                }
            }
            return descriptionProduct
        })


        .catch((error) => {
            throw error
        })

    return response

}


module.exports = { getProducts: getProducts, getDescription: getDescription };
