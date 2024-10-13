import { useEffect, useState } from 'react'
import { getProducts, addProduct, updateProduct, deleteProduct } from './services/db.js'
import './App.css'
import './assets/css/crud.css'

function App() {
  const [products, setProducts] = useState([])
  const [refresh, setRefresh] = useState(false); // New state to control refresh

  useEffect(() => {
    console.log('Fetching products...');
    getProducts().then((data) => {
      setProducts(data);
    });
  }, [refresh]); // Add 'refresh' as the dependency


  // Function to manually refresh products
  const refreshProducts = () => {
    setRefresh(!refresh); // Toggle the refresh flag to trigger re-fetch
  };

  const handleAddProduct = (e) => {
    e.preventDefault()

    const name = e.target[0].value
    const description = e.target[1].value
    const price = e.target[2].value

    addProduct({ name, price, description }).then((data) => {
      setProducts(data)
      refreshProducts(); // Refresh products after adding a new product
    })
  }

  const handleUpdateProduct = (id, product) => {
    updateProduct(id, product).then((data) => {
      setProducts(data)
      refreshProducts();
    })
  }

  const handleDeleteProduct = (id) => {
    deleteProduct(id).then((data) => {
      setProducts(data)
      refreshProducts();
    })
  }

  return (
    <>
      <h1>Products</h1>
      <form onSubmit={handleAddProduct}>
        <input type='text' placeholder='Name' />
        <input type='text' placeholder='Description' />
        <input type='number' placeholder='Price' />
      <button className='add_button' type='submit'><span>Add Product</span></button>
      </form>

      {products.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td className='buttons'>
                  <button className='edit_button' onClick={() => handleUpdateProduct(product.id, { name: 'Updated Product', description: 'Updated Description', price: 100 })}><span>Update</span></button>
                  <button className='delete_button' onClick={() => handleDeleteProduct(product.id)}><span>Delete</span></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

export default App
