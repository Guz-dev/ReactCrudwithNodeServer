export const getProducts = () => {
    const products = fetch(`http://${import.meta.env.VITE_SERVER_HOST}:${import.meta.env.VITE_SERVER_PORT}/api/products`).then((response) => response.json()).then((data) => data)
    return products
}

export const addProduct = (product) => {
    const products = fetch(`http://${import.meta.env.VITE_SERVER_HOST}:${import.meta.env.VITE_SERVER_PORT}/api/products`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    }).then((response) => response.json()).then((data) => data)
    return products
}

export const updateProduct = (id, product) => {
    console.log(id, product);
    
    const products = fetch(`http://${import.meta.env.VITE_SERVER_HOST}:${import.meta.env.VITE_SERVER_PORT}/api/products/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    }).then((response) => response.json()).then((data) => data)
    return products
}

export const deleteProduct = (id) => {
    const products = fetch(`http://${import.meta.env.VITE_SERVER_HOST}:${import.meta.env.VITE_SERVER_PORT}/api/products/${id}`, {
        method: 'DELETE'
    }).then((response) => response.json()).then((data) => data)
    return products
}