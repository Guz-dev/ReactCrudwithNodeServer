import connection from '../services/sql.js'

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM products', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(JSON.parse(JSON.stringify(results)))
    })
  })
}

export const addProduct = (product) => {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO products SET ?', product, (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(JSON.parse(JSON.stringify(results)))
    })
  })
}

export const updateProduct = (id, product) => {
  return new Promise((resolve, reject) => {
    connection.query('UPDATE products SET ? WHERE id = ?', [product, id], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(JSON.parse(JSON.stringify(results)))
    })
  })
}

export const deleteProduct = (id) => {
  return new Promise((resolve, reject) => {
    connection.query('DELETE FROM products WHERE id = ?', id, (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(JSON.parse(JSON.stringify(results)))
    })
  })
}
