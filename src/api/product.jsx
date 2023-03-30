import instance from "./instance";

const getAllProduct = () => {
    return instance.get('/books')
    //return 'http://localhost:3000'.get('/products')
}
const getOneProduct = (id) => {
    return instance.get('/books/' + id)
}
const addProduct = (product) => {
    return instance.post('/books', product)
}
const deleteProduct = (id) => {
    return instance.delete('/books/' + id)
}
const updateProduct = (product) => {
    return instance.put('/books/' + product.id, product)
}

export { getAllProduct, getOneProduct, addProduct, deleteProduct, updateProduct }