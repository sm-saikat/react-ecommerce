const allProducts = require('../assests/products')

exports.getProducts = (req, res)=>{
    const {sortby = 'default', category = 'all'} = req.query
    let products = []

    if(category !== 'all'){
        products = allProducts.filter(product => product.category === category)
    }else{
        products = allProducts
    }

    if(sortby !== 'default'){
        products.sort((a, b) => {

            switch(sortby){
                case 'low-to-high':
                    return a.price - b.price
                    
                case 'high-to-low':
                    return b.price - a.price

                default: return
            }
        })
    }

    setTimeout(()=>{
        res.json(products)
    }, 500)
}